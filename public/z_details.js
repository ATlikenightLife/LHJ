var loca = localStorage['loca'];
var loca_login = localStorage['id'];
if(loca_login){
    $.ajax({
        type:'GET',
        url:'/varification/'+loca_login,
        // dataType:'json',
        success:function(json){
            // console.log(json);
            if(!json.sta){
                window.location = '/userlogin';
            }
        }
    });
}else{
    window.location = '/userlogin';
}

// console.log(loca);

$(function () {
    // localStorage.removeItem('id');
    $('.dom-left-btn').find('a').attr('href',loca)

    // 新建一个对象接收传入商品样式的参数
    var style_par = {
        u_id:loca_login,
        goods_id:$('body').attr('data-id'),
        name:$('.price-desc').text(),
        color:'',
        size:'',
        num:'',
        price:$('.num').text(),
        shop_titlt:$('.shop-title').text(),
        img:$('body').attr('data-img'),        
    }
    



    // var listShop = localStorage.getItem("stor");
    // var obj = JSON.parse(listShop);
    // // console.log(obj);
    // $('.title-centent').html(obj.name);
    // $('.num').html(obj.price);
    //当移动滚动条时发生的事件
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        //    console.log(height);
        if (height >= 150) {
            $('.details-top > div').addClass('header1');
            //    $('.dom-header-nav li').eq(0).on('click');
        } else {
            $('.details-top > div').removeClass('header1');
            // $('.dom-header-nav li').eq(0).off('click');
        }
        if (height >= 710 && height < 1269) {
            $('.dom-header-nav li').eq(1).addClass('active').siblings().removeClass('active');
        } else if (height >= 1269) {
            $('.dom-header-nav li').eq(2).addClass('active').siblings().removeClass('active');
        } else {
            $('.dom-header-nav li').eq(0).addClass('active').siblings().removeClass('active');
        }
    });
    // 点击导航栏滚动条移动事件
    $('.dom-header-nav li').click(function () {
        if ($(this).index() == 0) {
            // console.log(1);
            // $(window).scrollTop(0);
            $("html,body").animate({ scrollTop: 0 }, 500);
            $(this).addClass('active').siblings().removeClass('active');
        } else if ($(this).index() == 1) {
            // $(window).scrollTop(710);
            $("html,body").animate({ scrollTop: 710 }, 500);
            $(this).addClass('active').siblings().removeClass('active');
        } else {
            // $(window).scrollTop(1270);
            $("html,body").animate({ scrollTop: 1270 }, 500);
            $(this).addClass('active').siblings().removeClass('active');
        }
    });
    //滑动图片  
    var code = 0;
    var x1;
    var x2;
    var code1 = 0;
    $('.slider-container').on('touchstart', function (e) {
        // console.log(e.touches[0].clientX);
        x1 = e.touches[0].clientX;
        // console.log($width);
    });
    $('.slider-container').on('touchmove', function (e) {
        x2 = e.touches[0].clientX;
    });
    $('.slider-container').on('touchend', function () {
        var $width = parseInt($(this).css('width'));
        var num = $(this).children().length - 1;
        // console.log(num);
        if (x2 < x1) {
            code = code - $width;
            code1++;
            if (code < -1 * (num * $width)) {
                code = -1 * (num * $width);
                code1 = num;
            }
        } else {
            code = code + $width;
            code1--;
            if (code > 0) {
                code = 0;
                code1 = 0;
            }
        }
        $(this).css({ transform: 'translateX(' + code + 'px)' });
        $('.slider-nav i').eq(code1).addClass('current').siblings().removeClass('current');
    });

    // 加入购物车弹出框
    //点击显示加入购物页面
    $('.skutext').click(function () {
        $('.gwc').show();
    });
    //点击显示加入购物页面
    $('.bottom-content-warp .content-trade a').click(function () {
        $('.gwc').show();
    });
    //点击隐藏加入购物页面
    $('.gwc-header-close').click(function () {
        $('.gwc').hide();
    });
    // 选中尺码添加类并改变类为gwc-header-main-info-check的值
    $('.gwc-list-item-c a').click(function () {
        $(this).addClass('checked').siblings().removeClass('checked');
        style_par.size = $(this).text();
        // console.log(style_par);
        $('.gwc-header-main-info-check').html($(this).children().html());
    });
    // 选中颜色添加类并改变类为gwc-header-main-info-color的值
    $('.gwc-list-item-f a').addClass('checked').siblings().removeClass('checked');
    $('.gwc-header-main-info-color').html($('.gwc-list-item-f a').children().eq(1).html());
    style_par.color = $('.gwc-list-item-f a').text();

    $('.gwc-list-item-f a').click(function () {
        $(this).addClass('checked').siblings().removeClass('checked');
        style_par.color = $(this).text();
        // console.log(style_par);
        $('.gwc-header-main-info-color').html($(this).children().eq(1).html());
    });
    // 初始数量为1并禁用-按钮
    var number1 = parseInt($('.gwc-body-number-input').val());
    if (number1 == 1) {
        $('.gwc-body-number > button').eq(0).addClass('disabled');
    }
    //分期的初始价格数组
    var price = new Array();
    $('.number-1-1').each(function (i) {
        price[i] = parseInt($(this).html());
        // console.log(price[i]);
    });
    //数量'-'按钮
    $('.gwc-body-number > button').eq(0).click(function () {
        var number2 = parseInt($('.gwc-body-number-input').val());
        if (number2 <= 2) {
            $('.gwc-body-number > button').eq(0).attr({ disabled: 'false' });
            $('.gwc-body-number > button').eq(0).addClass('disabled');
            $('.gwc-body-number-input').val(1);
        } else {
            $('.gwc-body-number > button').eq(0).removeAttr('disabled');

        }
        $('.gwc-body-number-input').val(function () {
            return number2 = number2 - 1;
        });
        // console.log(number2);
        $('.number-1-1').each(function (i) {
            $(this).html((number2 * price[i]));
        });
    });
    //数量'+'按钮
    $('.gwc-body-number > button').eq(1).click(function () {
        var number3 = parseInt($('.gwc-body-number-input').val());
        if (number3 >= 1) {
            $('.gwc-body-number > button').eq(0).removeClass('disabled');
            $('.gwc-body-number > button').eq(0).removeAttr('disabled');
        }
        $('.gwc-body-number-input').val(function () {
            return number3 = number3 + 1;
        });
        // console.log(style_par);
        // console.log(number3);
        $('.number-1-1').each(function (i) {
            $(this).html((number3 * price[i]));
        });
    });
    //输入数量框失去焦点
    $('.gwc-body-number-input').focusout(function () {
        var number1 = parseInt($('.gwc-body-number-input').val());
        if (number1 < 1) {
            $('.gwc-body-number > button').eq(0).attr({ disabled: 'false' });
            $('.gwc-body-number > button').eq(0).addClass('disabled');
            $('.gwc-body-number-input').val(1);
            $('.number-1-1').each(function (i) {
                $(this).html(price[i]);
            });
        } else {
            $('.number-1-1').each(function (i) {
                $(this).html((number1 * price[i]));
            });
        }
    });
    // 花呗分期点击选择点击不选择
    $('.gwc-body-fenqi-content label').click(function () {
        $(this).toggleClass('checked').siblings().removeClass('checked');
    });

    // 点击加入购物车
    $('.gwc-footer .content-trade a:first').click(function () {
        style_par.num = $('.gwc-body-number-input').val();
        $.post('/carbuy',style_par,function(res){
            $('.gwc').hide();
            $('.join_success').fadeIn(800);
            setTimeout(function(){
                $('.join_success').fadeOut();
            },800);

        });
    });
    $('.dom-left-btn').click(function () {
        // console.log(1);
        // window.location = './shop.html';
    });
    // console.log($('.number-1-1').html());

    // 立即购买时传参数函数
    $('.buy_now').click(function(){
        Post_style();
    });


    function Post_style() {
        style_par.num = $('.gwc-body-number-input').val();
        $.post('/carbuy',style_par,function(res){
            // console.log(res.insertId);
            var arr = [res.insertId];
            localStorage['carid'] = JSON.stringify(arr);
            window.location.href = '/orders';
        });
        // window.localStorage['style'] = JSON.stringify(style_par);
    };

    $('.right-btn-link').click(function(){
        window.location = '/cartbuy/'+loca_login;
    });

});