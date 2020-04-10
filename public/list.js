window.onload = function () {
    // name 商品名称
    // img 商品图片
    // price   商品价格
    // M_sales 月销售量
    // shop    店铺名称


    var list = [
        {
            name: "MOCO秋冬新款高腰v领针织毛衣中长款连衣裙女MA173DRS303 摩安珂",
            img: ["./img/list_img/1_1.webp", "./img/list_img/1_2.webp"],
            price: ["199", "00"],
            M_sales: "134",
            shop: 'moco'
        },
        {
            name: "moco春季蕾丝钩花两件套连衣裙",
            img: ["./img/list_img/2_1.webp", "./img/list_img/2_2.webp"],
            price: ["356", "00"],
            M_sales: "250",
            shop: '珂莱蒂尔'
        },
        {
            name: "MOCO秋冬新款中长款过膝 长袖蕾丝针织修身连衣裙女MA173DRS307",
            img: ["./img/list_img/3_1.webp", "./img/list_img/3_2.webp"],
            price: ["566", "00"],
            M_sales: "653",
            shop: 'moco'
        },
        {
            name: "MOCO春季新品V领印花不规则裙摆法式连衣裙MA181DRS209 摩安珂",
            img: ["./img/list_img/4_1.webp", "./img/list_img/4_2.webp"],
            price: ["399", "00"],
            M_sales: "288",
            shop: 'moco'
        },
        {
            name: "moco圆领套头长袖细条纹针织连衣裙",
            img: ["./img/list_img/5_1.webp", "./img/list_img/5_2.webp"],
            price: ["299", "00"],
            M_sales: "234",
            shop: 'moco'
        },
        {
            name: "moco夏季半开襟贴布绣七分袖牛仔连衣裙",
            img: ["./img/list_img/6_1.webp", "./img/list_img/6_2.webp"],
            price: ["458", "00"],
            M_sales: "123",
            shop: 'moco'
        },
        {
            name: "koradior/珂莱蒂尔新款红色修身蕾丝法式连衣裙",
            img: ["./img/list_img/7_1.webp", "./img/list_img/7_2.webp"],
            price: ["136", "00"],
            M_sales: "231",
            shop: '珂莱蒂尔'
        },
        {
            name: "2件欧时力秋季针织连衣裙",
            img: ["./img/list_img/8_1.webp", "./img/list_img/8_2.webp"],
            price: ["327", "00"],
            M_sales: "166",
            shop: 'ochirly'
        },
        {
            name: "ochirly欧时力连帽长袖连衣裙",
            img: ["./img/list_img/9_1.webp", "./img/list_img/9_2.webp"],
            price: ["569", "00"],
            M_sales: "322",
            shop: 'ochirly'
        },
        {
            name: "moco长袖泡泡袖衬衫连衣裙",
            img: ["./img/list_img/10_1.webp", "./img/list_img/10_2.webp"],
            price: ["520", "00"],
            M_sales: "524",
            shop: 'moco'
        },
    ];



    var list_tem = [];
    list_tem = list_tem.concat(list);

    // 滚动条事件
    var rtn = 0;
    var ru = false;
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if (!ru) {

            if ($(window).scrollTop() > 10) {
                $('.box').css({ position: 'fixed', top: '0px' });
                $('.nav_box').hide();
            } else {
                $('.box').css({ position: 'relative', top: '0px' });
                $('.nav_box').show();
            }
            if ($(window).scrollTop() > rtn) {
                rtn = $(window).scrollTop();
                $('.return_top').fadeOut("slow");
            } else {
                rtn = $(window).scrollTop();
                $('.return_top').fadeIn("slow");
            }
            // console.log($(window).height());
            // console.log($(document).height());
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                var list_len = list_tem.length;
                list_tem = list.concat(list_tem);
                console.log(list_tem);
                generate_html(list_tem, list_len);
            }

        }

    });
    // 点击返回头部
    $('.return_top').click(function () {
        ru = true;
        $('.return_top').fadeOut("slow");
        $('html,body').animate({
            scrollTop: 0
        }, 500 ,function(){
            rtn = -1;
            ru = false;
        });
    });

    // 生成html代码
    var trr = false;
    var yangshi = document.getElementById('yangshi');
    generate_html(list);
    function generate_html(list_obj, num) {
        // console.log(list);
        if (num == undefined) {
            $('.list_box:last').children().remove();
            num = 0;
        }

        for (var i = num; i < list_obj.length; i++) {
            var tem = list_obj[i];
            if (!trr) {
                $('.log_img').removeClass('glyphicon-th-list').addClass('glyphicon-th-large')
                var hml = '<div class="col-xs-6 commo_box hrf"><img src="' + tem.img[0] + '" width="100%"><p>' + tem.name + '</p><div class="mony_box"><span>￥' + tem.price[0] + '.<i>' + tem.price[1] + '</i></span>月销' + tem.M_sales + '笔<a class="">...</a></div></div>';
                $('.list_box:last').append(hml);
            } else {
                $('.log_img').removeClass('glyphicon-th-large').addClass('glyphicon-th-list')
                var hml = '<div class="col-xs-12 commo_box2 row hrf"><img src="' + tem.img[1] + '" width="124px"><div class="right_commo"><p>' + tem.name + '</p><span>月销' + tem.M_sales + '笔<i class="guan">' + tem.shop + '官方旗舰店</i></span><span>￥' + tem.price[0] + '.<i>' + tem.price[1] + '</i><i class="yun">运费￥12.00</i></span></div></div>';
                $('.list_box:last').append(hml);
            }
        }
    }


    // 改变排版样式

    yangshi.addEventListener("touchstart", function () {
        trr = !trr;
        generate_html(list_tem);
    });

    // 按价格，销量，综合排序
    var but_itme = document.getElementsByClassName('but_itme');
    but_itme[0].style.color = 'red';
    var tu = false;
    for (var i = 0; i < but_itme.length; i++) {
        but_itme[i].value = i;
        // 移动端点击事件
        but_itme[i].addEventListener("touchstart", function () {
            for (var a = 0; a < but_itme.length; a++) {
                but_itme[a].style.color = '#aaaaaa';
            }
            but_itme[this.value].style.color = 'red';


            switch (this.value) {
                case 0://综合排序
                    // list_tem.sort(sales_sort);
                    for (var i = 0; i < list.length; i++) {
                        list_tem[i] = list[i];
                    }
                    generate_html(list_tem);
                    break;
                case 1://销量排序
                    list_tem.sort(sales_sort);
                    generate_html(list_tem);
                    break;
                case 2://价格排序
                    list_tem.sort(price_sort);
                    if (tu) {
                        list_tem.reverse();
                        $('.price_logo').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
                    } else {
                        $('.price_logo').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
                    }
                    tu = !tu;
                    generate_html(list_tem);
                    break;
            }

        });
    }

    // 按照销量排序
    function sales_sort(a, b) {
        a = Number(a.M_sales)
        b = Number(b.M_sales)
        return b - a;
    }
    // 按照价格排序
    function price_sort(a, b) {
        a = Number(a.price[0])
        b = Number(b.price[0])
        return b - a;
    }

    // 点击跳转
    $('.list_box').children().click(function(){
        var num = $(this).index();
        var ttt = list_tem[num];
        ttt = JSON.stringify(ttt);
        localStorage.setItem('stor',ttt);

        window.location = './details.html';
    }); 


};