var mysql = require('mysql');

var onnc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'taobao'
});

onnc.connect(function (err) {
    if (err) {
        console.log('数据库连接失败！！！');
        return;
    }
    console.log('数据库连接成功！！！');
});
exports.getChina = function (fun) {
    let sql = 'select * from china';
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据库查询失败！！！');
            return;
        }
        fun(rows);

    });
}

// 添加注册用户到数据库
exports.getAdduser = function (post, fun) {
    let sql = 'insert into users(username,name,pass,sex,address,code,phone,email,state,addtime) value(?,?,?,?,?,?,?,?,?,?)';
    let arr = [];
    for (key in post) {
        arr.push(post[key]);
    }
    // console.log(arr);
    onnc.query(sql, arr, function (err, rows) {
        if (err) {
            console.log('数据创建失败！！！');
            return;
        }
        fun(rows);
    });
}


// 取出数据进行对比
exports.getUserlogin = function (fun) {
    let sql = 'select id,username,pass,phone,email,state from users where state=1';
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据查询失败！！！');
            return;
        }
        fun(rows);
    })
}


// 用户界面
exports.getUserface = function (u_id, fun) {
    let sql = 'select username,address,phone,face from users where id=' + u_id;
    // console.log(sql);
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据获取失败！！！');
            fun([{ username: '未登录' }]);
            return;
        }
        fun(rows);
    });
}

// 商品列表页
exports.getShopList = function (p_id, pages, fun) {
    let num = 8;
    let offset = (pages - 1) * num;
    let sql = 'select id,name,price,picname,loca,num from goods where state in (1,2) and concat(typeid,name,merchant,loca)  like "%'+p_id+'%" limit ' + offset + ',' + num;
    console.log(sql);
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据获取失败！！！');
            return;
        }
        fun(rows);
    });
}


//商品详情页
exports.getDetails = function (id, fun) {
    let sql = 'select * from goods where id=' + id;
    // console.log(sql);
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据获取失败！！！');
            return;
        }
        fun(rows);
    });
}


// 加入购物车
exports.getCarBuy = function (data, fun) {

    let sql = 'insert into carbuy value(null,?,?,?,?,?,?,?,?)';
    let arr = [data.goods_id, data.u_id, data.name, data.color + '/' + data.size, data.price, data.num, data.shop_titlt, data.img];
    // console.log(sql);
    onnc.query(sql, arr, function (err, rows) {
        if (err) {
            console.log('数据添加失败！！！');
            return;
        }
        fun(rows);
    });
}

// 取出购物车数据
exports.getSetcar = function (post, fun) {

    var sql = 'select * from carbuy';
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据添加失败！！！');
            return;
        }

        let top_arr = [];
        for (var i = 0; i < post.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (post[i] == rows[j].id) {
                    top_arr.push(rows[j]);
                }
            }
        }
        // console.log(top_arr);

        fun(top_arr);
    });

}



// 提交订单页
exports.getSubmit = function (u_id, fun) {
    let sql = 'select username,address,phone from users where id=' + u_id;
    // console.log(sql);
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据获取失败！！！');
            return;
        }
        fun(rows);
    });
}

// 添加订单数据到orders表
exports.getAddOrder = function (data, fun) {
    let sql = 'insert into orders value(null,?,?,?,?,?,?,?,?)';
    let arr = [data.uid, data.linkman, data.address, data.code, data.phone, data.addtime, data.total, data.status];
    // console.log(sql);
    onnc.query(sql, arr, function (err, rows) {
        if (err) {
            console.log('数据添加失败！！！');
            return;
        }
        fun(rows);
        // data['detail_su[0][orderid]'] = rows.insertId;
        // console.log(data['detail_su[0][orderid]']);
        // exports.getAddDetail(data, function (list) {
        //     if (list) {
        //         fun(rows);
        //     }
        // });

    });

}

// 添加订单数据到detail表
exports.getAddDetail = function (data, fun) {
    let goodsid = data['goodsid[]'];
    let name = data['name[]'];
    let price = data['price[]'];
    let num = data['num[]'];
    let color_size = data['color_size[]'];
    // console.log(String(typeof goodsid));
    if (String(typeof goodsid) == 'object') {
        for (var i = 0; i < goodsid.length; i++) {
            let sql = 'insert into detail value (null,' + data.orderid + ',' + goodsid[i] + ',"' + name[i] + '",' + price[i] + ',' + num[i] + ',"' + color_size[i] + '")';
            // console.log(sql);
            onnc.query(sql, function (err, rows) {
                if (err) {
                    console.log('数据添加失败！！！');
                    return;
                }
            });
            
        }
    } else {
        let sql = 'insert into detail value (null,' + data.orderid + ',' + goodsid + ',"' + name + '",' + price + ',' + num + ',"' + color_size + '")';
        // console.log(sql);
        onnc.query(sql, function (err, rows) {
            if (err) {
                console.log('数据添加失败！！！');
                return;
            }
        });
    }
    fun('sucess');
}


// 添加头像
exports.getaddface = function(uid,facename,fun){
    let sql = 'update users set face="'+facename+'" where id='+uid+'';
    onnc.query(sql, function (err, rows) {
        if (err) {
            console.log('数据添加失败！！！');
            return;
        }
        fun(rows);
    });
}



// 分类***************************************************************************
// 显示菜单
exports.getCatList = function (fun) {

    let sql = 'select * from type where pid=0';

    onnc.query(sql, function (err, result) {
        if (err) {
            console.log(' 数据查询失败！');
            return;
        }

        fun(result);
    });
}

// 通过父级id查询数据
exports.getList = function (p_id, fun) {
    // console.log(p_id);

    let sql = 'select * from type';

    onnc.query(sql, function (err, result) {
        if (err) {
            console.log(' 数据查询失败！');
            return;
        }

        let cat_tree = getCatTree(p_id, [], 1);

        function getCatTree(p_id, tree, level) {
            // 所有的父级分类
            let top = [];
            for (let i = 0; i < result.length; i++) {
                if (result[i].pid == p_id) {
                    top.push(result[i]);//把所有的数据存储到top这个数组中
                }
            }

            for (let i = 0; i < top.length; i++) {
                top[i].level = level;

                // 把所有拼接好的数据，放到这个空数组中
                tree.push(top[i]);

                // pid为0的id，就是它所属分类的父id
                tree = getCatTree(top[i].id, tree, level + 1); //递归

            }

            return tree;
        }

        fun(cat_tree);
        // fun(result);
    });
}


// 获取购物车列表
exports.getCartbuyList = function(id,fun){
    let sql = 'select * from carbuy where userid='+id;

    onnc.query(sql,function(err,result){
        if (err) {
            console.log(' 数据查询失败！');
            fun();
            return;
        }
        fun(result);
    })
}

// 删除购物车数据
exports.getCartbuyDelete = function(num,fun){
    let sql = 'delete from carbuy where id='+num;
    onnc.query(sql,function(err,result){
        if (err) {
            console.log(' 数据查询失败！');
            return;
        }
        // console.log(result);
        fun(result);
    })
}
// 订单详情表
exports.getOrdersDetail = function (pid, fun) {
    let sql = 'select detail.*,goods.picname,goods.merchant,orders.* from detail inner join  orders  on detail.orderid = orders.id inner join goods on detail.goodsid = goods.id where orderid='+pid;
    
    onnc.query(sql, function (err, result) {
        if (err) {
            console.log(' 数据查询失败！');
            return;
        }
        // console.log(11111);     
        fun(result);
    });
}
// 获取订单列表
exports.getDetailList = function (pid,fun) {
    let sql = 'select detail.*,goods.picname,goods.merchant,orders.* from detail inner join  orders  on detail.orderid = orders.id inner join goods on detail.goodsid = goods.id where uid='+pid;
    // console.log(sql);
    onnc.query(sql, function (err, result) {
        if (err) {
            console.log(' 数据查询失败！');
            fun();
            return;
        }
        // console.log(11111);     
        fun(result);
    });
}

// onnc.end(function(){
//     console.log('数据库关闭！！！');
// });