$(function () {
    // var lyq = [];
    //     {
    //         name: 'COS女装 长款美利奴羊毛连衣裙黑色2019秋季新品0780533001',
    //         img: './images/shop1.jpg',
    //         price: '990',
    //         del: '',
    //         freight: '免运费',
    //         num: '65',
    //         arae: '苏州',
    //         imglist:['./images/details01']
    //     }, {
    //         name: 'COS女装 长款羊毛连衣裙酒红色2019秋季新品0798593003',
    //         img: './images/shop2.jpg',
    //         price: '890',
    //         del: '',
    //         freight: '免运费',
    //         num: '26',
    //         arae: '苏州'
    //     }, {
    //         name: 'Amii极简气质学院风纯色连帽抽绳毛衣裙长款落肩袖宽松长裙',
    //         img: './images/shop3.jpg',
    //         price: '299.80',
    //         del: '￥597',
    //         freight: '免运费',
    //         num: '36',
    //         arae: '佛山'
    //     }, {
    //         name: '茵曼2019新款秋冬文艺复古灯芯绒连衣裙翻领收腰碎花荷叶边中长款',
    //         img: './images/shop4.jpg',
    //         price: '279',
    //         del: '',
    //         freight: '免运费',
    //         num: '55',
    //         arae: '佛山'
    //     }, {
    //         name: '秋水伊人连衣裙冬装2019新款女装蕾丝拼接系带中长款针织裙',
    //         img: './images/shop5.jpg',
    //         price: '369',
    //         del: '￥898',
    //         freight: '免运费',
    //         num: '21',
    //         arae: '杭州'
    //     }, {
    //         name: 'Massimo Dutti女装 2019秋冬新款烟囱领装饰针织女式连衣裙',
    //         img: './images/shop6.jpg',
    //         price: '690',
    //         del: '',
    //         freight: '免运费',
    //         num: '39',
    //         arae: '上海'
    //     }, {
    //         name: 'sandro2019秋冬新款女装V领珠珠装饰显瘦针织连衣裙SFPRO00514',
    //         img: './images/shop7.jpg',
    //         price: '2860',
    //         del: '',
    //         freight: '免运费',
    //         num: '167',
    //         arae: '嘉兴'
    //     }, {
    //         name: '何穗同款伊芙丽裙子女2019年新款秋装高腰雪纺衬衫式假两件连衣裙',
    //         img: './images/shop8.jpg',
    //         price: '599',
    //         del: '￥980',
    //         freight: '免运费',
    //         num: '967',
    //         arae: '杭州'
    //     }, {
    //         name: 'Vero Moda2019秋装新款流行裙子收腰显瘦气质连衣裙女|319446526',
    //         img: './images/shop9.jpg',
    //         price: '399',
    //         del: '￥679',
    //         freight: '免运费',
    //         num: '1259',
    //         arae: '天津'
    //     }, {
    //         name: '三彩2019初秋冬季新款法式条纹气质早秋打底针织裙毛毛连衣裙女',
    //         img: './images/shop10.jpg',
    //         price: '298',
    //         del: '￥739',
    //         freight: '免运费',
    //         num: '1593',
    //         arae: '杭州'
    //     }
    // ];
    var page = 1;
    $(document).scroll(function () {
        var win_height = $(window).height();
        var doc_height = $(this).height();
        var scr_height = $(this).scrollTop();
        if ((scr_height + win_height) == (doc_height)) {
            // console.log($(this).scrollTop());
            page++;
            Data_shop(page);
        }

    });


    function Data_shop(pages) {
        var typeid = $('form').attr('data-name');
        // console.log(typeid);
        var pageaobj = { p_id: typeid, pages: pages }
        $.post('/shop.api', pageaobj, function (res) {
            // console.log(res);
            ddd(res);
        })

    }




    // 打印商品列表函数
    function ddd(lyq) {
        // console.log(lyq);
        if (lyq.length == 0) {
            // var $li = $('<li data-loca="/details/' + lyq[i].id + '" style="width:100%;height:50px;background:#aaaaaa;">到底了哦</li>');
            return;
        }
        for (var i = 0; i < lyq.length; i++) {
            // 外层li
            var $li = $('<li data-loca="/details/' + lyq[i].id + '"></li>');
            // 第一部分
            var $li_div = $('<div class="list-item"></div>');
            // 1
            var $li_div_1 = $('<div class="list-p"></div>');
            // 1-1
            var $div_1_a = $('<a></a>');
            var $div_1_a_img = $('<img>');
            var $div_1_a_span = $('<span class="item-flag"></span>');
            $div_1_a.append($div_1_a_img);
            $div_1_a.append($div_1_a_span);
            $li_div_1.append($div_1_a);
            // 2
            var $li_div_2 = $('<div class="list-d"></div>');
            // 2-1
            var $div_2_a = $('<a></a>');
            var $div_2_a_h3 = $('<h3 class="d-title"></h3>');
            $div_2_a.append($div_2_a_h3);
            // 2-2
            var $div_2_p = $('<p class="d-price"></p>');
            var $div_2_p_em = $('<em></em>');
            var $div_2_p_em_span1 = $('<span class="price-icon">￥<span>');
            var $div_2_p_em_span2 = $('<span class="font-num"><span>');
            var $div_2_p_del = $('<del></del>');
            $div_2_p_em.append($div_2_p_em_span1);
            $div_2_p_em.append($div_2_p_em_span2);
            $div_2_p.append($div_2_p_em);
            $div_2_p.append($div_2_p_del);
            // 2-3
            var $div_2_div = $('<div class="list-d-main"></div>');
            var $div_2_div_p1 = $('<p class="d-freight"></p>');
            var $div_2_div_p2 = $('<p class="d-num"><span class="funt-num"></span>人付款</p>');
            var $div_2_div_p3 = $('<p class="d-area"></p>');
            $div_2_div.append($div_2_div_p1);
            $div_2_div.append($div_2_div_p2);
            $div_2_div.append($div_2_div_p3);
            // 2-整合
            $li_div_2.append($div_2_a);
            $li_div_2.append($div_2_p);
            $li_div_2.append($div_2_div);
            // 第一部分整和
            $li_div.append($li_div_1);
            $li_div.append($li_div_2);
            // 第二部分
            var $li_div1 = $('<div class="icons-group"></div>');
            // 总的整和
            $li.append($li_div);
            $li.append($li_div1);
            // 添加到.search-container容器中
            // var $li = $('.search-container li:first').clone();
            $('.search-container').append($li);
        }

        var j = 0;
        var num = $('.d-title').length - lyq.length;
        // console.log(num);
        for (var i = num; i < lyq.length + num; i++) {
            // console.log(i);
            $('.d-title').eq(i).html(lyq[j].name);
            $('.list-p a img').eq(i).attr({ src: '/shop_img/' + lyq[j].picname });
            $('.d-price .font-num').eq(i).html(lyq[j].price);
            // $('.d-price del').eq(i).html(lyq[i].del);
            $('.list-d-main .d-freight').eq(i).html('免运费');
            $('.list-d-main .d-num .funt-num').eq(i).html(lyq[j].num);
            $('.list-d-main .d-area').eq(i).html(lyq[j].loca);
            j++;
        }
    }
    // 综合排序





    // 页面跳转
    $('.search-container').on('click', 'li', function () {
        // console.log($(this).attr('data-loca'));
        // console.log(11111);
        window.location = $(this).attr('data-loca');
    });
});