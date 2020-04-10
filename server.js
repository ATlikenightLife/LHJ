let path = require('path');
let hbs = require('hbs');
let querystring = require('querystring');
let express = require('express');
let app = express();
let mysql = require('./model/mysql');
var multer = require('multer');
var upload = multer({ dest: 'public/face/' });
var fs = require('fs');

// 设置端口号变量
app.set('port', process.env.PORT || 8080);

// 设置视图变量
app.set('views', path.join(__dirname, 'views'));

// 设置静态
app.use(express.static(path.join(__dirname, 'public')));
app.use('/details', express.static(path.join(__dirname, 'public')));
app.use('/UserIndex', express.static(path.join(__dirname, 'public')));
app.use('/shop', express.static(path.join(__dirname, 'public')));
app.use('/fenlei', express.static(path.join(__dirname, 'public')));
app.use('/cartbuy', express.static(path.join(__dirname, 'public')));
app.use('/xiangqing', express.static(path.join(__dirname, 'public')));
app.use('/Theorderlist', express.static(path.join(__dirname, 'public')));

// 设置模板
app.set('view engine', 'html');

app.engine('html', hbs.__express);

app.get('/', function (req, res) {
    // res.send('desc6.webp');
    // res.sendFile(path.join(app.get('views'),'index.html'));
    res.redirect('/index');

});



// 中间件
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/face')
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now() + '.webp');
    }
});
// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

app.post('/upload/:id', upload.single('face'), function (req, res, next) {
    var file = req.file;
    var uid = req.params.id;
    // console.log(file.filename);
    mysql.getaddface(uid,file.filename,function(list){
        // res.render('UsersIndex', { img: file.filename });
        res.redirect('/UserIndex');
        // console.log(list);
    });

});

app.get('/form', function (req, res, next) {
    var form = fs.readFileSync(path.join(app.get('views'), 'demo.html'), { encoding: 'utf8' });
    // console.log(form);
    res.send(form);
});




// 首页
app.get('/index', function (req, res) {
    // res.send('desc6.webp');
    res.sendFile(path.join(app.get('views'), 'index.html'));

});


// 注册************************************************
app.get('/registered', function (req, res) {
    // res.sendFile(path.join(app.get('views'),'registered.html'));
    mysql.getChina(function (list) {
        let province = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].pid == 0) {
                province.push(list[i]);
            }
        }
        res.render('registered', { province: province });
    });
});

app.get('/registered.api/:id', function (req, res) {
    let city = [];
    let id = req.params.id;
    mysql.getChina(function (list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].pid == id) {
                city.push(list[i]);
            }
        }
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(city));
    });
});

// 取出用户名与前端页面做匹配 保证用户名的唯一性
app.get('/registered-users', function (req, res) {

    mysql.getUserlogin(function (list) {
        res.writeHead(200, { 'Content-type': 'aapplication/json' });
        res.end(JSON.stringify(list));
    });
});


app.post('/registered', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(post);
        let date = new Date;
        post.addtime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        // console.log(post);
        mysql.getAdduser(post, function (list) {
            if (list) {
                res.redirect('/userlogin');
            }
        });
    });
});


// 登录********************************************************
app.get('/userlogin', function (req, res) {
    res.sendFile(path.join(app.get('views'), 'login.html'));
});



app.post('/userlogin/api', function (req, res) {
    // console.log(post);
    let post = "";
    req.on('data', function (data) {
        post += data;
    });

    req.on('end', function () {
        post = querystring.parse(post);
    });
    mysql.getUserlogin(function (list) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        for (var i = 0; i < list.length; i++) {
            if (list[i].phone == post.names || list[i].username == post.names || list[i].email == post.names) {
                if (list[i].pass == post.pass) {
                    if (list[i].state == 1) {
                        res.end(JSON.stringify({ tur: true, id: list[i].id }));
                        return;
                    }
                }
            }
        }
        res.end(JSON.stringify({ tur: false, id: 0 }));
    });
});


// 登录验证
app.get('/varification/:id', function (req, res) {
    let id = req.params.id;
    res.writeHead(200, { 'Content-type': 'application/json' });
    mysql.getUserlogin(function (list) {
        for (var i = 0; i < list.length; i++) {
            if (id == list[i].id) {
                if (list[i].state == 1) {
                    res.end(JSON.stringify({ sta: true }));
                    return;
                }
            }
        }
        res.end(JSON.stringify({ sta: false }));
    });
});


// 用户页面
app.get('/UserIndex', function (req, res) {
    res.sendFile(path.join(app.get('views'), 'UsersIndex.html'));
});


app.get('/UserIndex/:id', function (req, res) {
    // res.sendFile(path.join(app.get('views'),'UsersIndex.html'));
    let id = req.params.id;
    mysql.getUserface(id, function (list) {
        // res.render('UsersIndex', { data: list[0].username,face:'' })
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(list[0]));
    });
});

// 分类**********************************************************************
// 显示分类页一级菜单
app.get('/fenlei', function (req, res) {
    mysql.getCatList(function (list) {
        res.render('fenlei', { title: '分类详情', data: list });
    });
});


// 显示分类页二级菜单
app.get('/menu/:p', function (req, res) {
    var num = req.params.p;
    // console.log(num);

    mysql.getList(num, function (list) {
        //    console.log(list);

        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(list));
    });
});

//购物车*******************************************************
app.get('/cartbuy/:id', function (req, res) {
    let id = req.params.id;
    mysql.getCartbuyList(id, function (data) {
        // console.log(data);
        if(data){
            res.render('cartbuy', { data: data });
        }else{
            // res.render('cartbuy', { data: data });
            res.redirect('/userlogin');

        }
    })
});

// 删除购物车数据
app.get('/del/:p', function (req, res) {
    var num = req.params.p;
    mysql.getCartbuyDelete(num, function (data) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(data));
    });
});




// 商品列表页******************************************************
app.get('/shop/:id', function (req, res) {
    // res.sendFile(path.join(app.get('views'),'shop.html'));
    let id = req.params.id;
    // console.log(id);
    mysql.getShopList(id, 1, function (list) {
        // console.log(list);
        res.render('shop', { data: list,name:id });
    });
});

app.post('/shop.api', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });

    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(post);
        mysql.getShopList(post.p_id, post.pages, function (list) {
            res.writeHead(200, { 'Content-type': 'aapplication/json' });
            res.end(JSON.stringify(list));
        });
    });

});


app.post('/soso',function(req,res){
    let post = "";
    req.on('data',function(data){
        post += data;
    })
    req.on('end',function(){
        post = querystring.parse(post);
        // console.log(post.name);
        res.redirect('/shop/'+post.name);
    })
})


// 商品详情页************************************************************
app.get('/details/:id', function (req, res) {
    // res.sendFile(path.join(app.get('views'),'Z_details.html'));
    let id = req.params.id;
    // console.log(id);
    mysql.getDetails(id, function (list) {
        // res.writeHead(200,{'Content-type':'application/json'});
        // res.end(JSON.stringify(list));
        let color_html = "";
        let color_shop = list[0].color.split(',');
        // console.log(color_shop);
        // 颜色
        for (var i = 0; i < color_shop.length; i++) {
            color_html += '<a href="javascript:void(0)" class="checked">';
            color_html += '<img src="images/gwc1-1.jpg" class="gwc-list-item-img">';
            color_html += '<span>' + color_shop[i] + '</span>';
            color_html += '</a>';
        }
        //尺码
        let size_html = "";
        let size_shop = list[0].size.split(',');
        for (var j = 0; j < size_shop.length; j++) {
            size_html += '<a href="javascript:void(0);">';
            size_html += '<span>' + size_shop[j] + '</span>';
            size_html += '</a>';
        }
        // 详情
        let descr_html = "";
        let descr_shop = list[0].descr.split(',');
        for (var i = 0; i < descr_shop.length; i++) {
            descr_html += '<div class="crop-unit">';
            descr_html += '<img src="shop_img/' + descr_shop[i] + '" alt="" width="100%">';
            descr_html += '</div>';
        }
        // console.log(size_html);
        res.render('z_details', { data: list[0], color: color_html, size: size_html, descr: descr_html });
        // res.render('z_details',{});
    });
});

// 添加入购物车
app.post('/carbuy', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(post);
        mysql.getCarBuy(post, function (list) {
            // console.log(list);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(list));
        });

    })
});

//提交订单表********************************************************************
app.get('/orders', function (req, res) {
    res.sendFile(path.join(app.get('views'), 'orders.html'));
    // res.render('orders',{data:sub_post});
});


app.post('/orders/carbuy', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(JSON.parse(post.id));
        post = JSON.parse(post.id);
        mysql.getSetcar(post, function (list) {
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(list));
        });
    });
});

app.get('/sorders/:id', function (req, res) {
    let id = req.params.id;
    mysql.getSubmit(id, function (list) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(list[0]));
    });
});

app.post('/order/orders_su', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(post);
        mysql.getAddOrder(post, function (rows) {
            if (rows) {

                res.writeHead(200, { 'Content-type': 'application/json' });
                res.end(JSON.stringify(rows.insertId));
            }
        });
    });
});

app.post('/detail/submit', function (req, res) {
    let post = "";
    req.on('data', function (data) {
        post += data;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        // console.log(post);
        mysql.getAddDetail(post, function (rows) {
            // console.log(rows);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify('success'));

        });
    });
});

// 订单列表表与订单详情表******************************
app.get('/xiangqing/:p', function (req, res) {
    var pid = req.params.p;
    mysql.getOrdersDetail(pid, function (list) {
        // console.log(list);
        res.render('xiangqing', { data: list, address: list[0].address, linkman: list[0].linkman, phone: list[0].phone });
    });
});

app.get('/Theorderlist/:id', function (req, res) {
    var pid = req.params.id;
    // console.log(pid);
    mysql.getDetailList(pid, function (list) {
        // console.log(list);
        if(list){
            res.render('Theorderlist', { data: list });
        }else{
            res.redirect('/userlogin');
        }
    });

});

app.listen(8080, function () {
    console.log('服务已开启！！！');
});
