window.onload = function () {

    // $('.mony :first').text();
    var list_shop =localStorage.getItem("stor");
    var obj = JSON.parse(list_shop)
    $('.mony :first').text('￥' + obj.price);
    $('.shop_name').text(obj.name);
    $('.month_xiao').text('月销售'+obj.M_sales+'件');



    //导航栏显示和隐藏
    var img_inde = 5;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 5) {
            $('.navga_box').fadeIn('solw');
        } else {
            $('.navga_box').fadeOut('solw');
        }
        var pos_top1 = $('.evalu').position().top + parseInt($('.show_img').css('height'));
        var pos_top2 = $('.det_top').position().top + parseInt($('.show_img').css('height'));
        // console.log(pos_top);
        if ($(window).scrollTop() >= pos_top1 && $(window).scrollTop() <= pos_top2) {
            $('.nav_text li').removeClass('acti').eq(1).addClass('acti');
        } else if ($(window).scrollTop() > pos_top2) {
            $('.nav_text li').removeClass('acti').eq(2).addClass('acti');
        } else {
            $('.nav_text li').removeClass('acti').eq(0).addClass('acti');
        }

        var win_hei = $(window).height() ;
        var doc_hei = $(document).height() - 50;
        if (($(window).scrollTop() + win_hei) >= doc_hei && img_inde < 10) {
            console.log($(window).scrollTop());
            img_inde ++;
            $('.img_sty').append('<img src="./img/xiangqing_'+img_inde+'.webp" width="100%" class="tianjia_img">');
        }


    });



    // 点击定位
    var nav_text = document.getElementById('nav_text');
    var nav_text_li = nav_text.getElementsByTagName('li');
    for (var i = 0; i < nav_text_li.length; i++) {
        nav_text_li[i].value = i;
        nav_text_li[i].addEventListener('touchend', function () {
            $('.nav_text li').removeClass('acti').eq().addClass('acti');
            // console.log(111);
            // var a = $(window).scrollTop();
            var pos_top1 = $('.evalu').position().top + parseInt($('.show_img').css('height'));
            var pos_top2 = $('.det_top').position().top + parseInt($('.show_img').css('height'));
            switch (this.value) {
                case 0:
                    $("html,body").animate({ scrollTop: 0 }, 500);
                    break;
                case 1:
                    $("html,body").animate({ scrollTop: pos_top1 }, 500);

                    break;
                case 2:
                    $("html,body").animate({ scrollTop: pos_top2 + 10 }, 500);
                    break;
            }
        });
    }


    // 滑动切换图片
    var show_img = this.document.getElementById('show_img');
    var commo_img = this.document.getElementById('commo_img');
    var show_hei = document.defaultView.getComputedStyle(show_img);
    var ing_inde = document.getElementById('menu_num_box');
    var star_X = 0;
    var end_X = 0;
    var inde = 0;



    show_img.ontouchstart = function (e) {
        commo_img.style.transition = 'none';
        var e = e || event;
        // console.log(e.touches[0]);
        star_X = e.touches[0].clientX;
    }
    show_img.ontouchmove = function (e) {
        var e = e || event;
        // console.log(show_hei.height);
        end_X = e.touches[0].clientX;
        var star_end = (end_X - star_X);
        commo_img.style.transform = 'translateX(-' + (inde * parseInt(show_hei.height) - star_end) + 'px)';

    }
    show_img.ontouchend = function () {
        commo_img.style.transition = 'all 300ms';
        // var e = e || event;
        if (star_X > end_X) {
            inde++;
            if (inde > 4) {
                inde = 4;
            }
        } else {
            inde--;
            if (inde < 0) {
                inde = 0;
            }
        }
        commo_img.style.transform = 'translateX(-' + (inde * parseInt(show_hei.height)) + 'px)';
        ing_inde.innerHTML = (inde + 1) + '/5';
    }


    // 点击加入购物车
    $('.ok,.cancle').click(function () {
        // $('.shop_car').slideUp('500');
        $('body').css('overflow', 'scroll')
        $('.shop_car').animate({
            height: '0%',
            opacity: '0'
        }, 500, function () {
            $('.shop_car').hide()
        });
    });





    $('.join_shopcar').click(function () {
        // console.log($(window).height());
        // $('.shop_car').slideUp('500');
        $('body').css('overflow', 'hidden')
        $('.shop_car').show();
        $('.shop_car').animate({
            height: '100%',
            opacity: '1'
        }, 500);
    });

    // 购买数量
    var num = $('.tianjia').children().eq(1).text();
    $('.tianjia').children().eq(0).click(function(){
        num --;
        if(num <= 1){
            num = 1;
        }
        $('.tianjia').children().eq(1).text(num);
    });
    $('.tianjia').children().eq(2).click(function(){
        num ++;
        $('.tianjia').children().eq(1).text(num);
    });




    // 选择尺码样式
    $('.color_sty').children().click(function(){
        $(this).parent().find('.color_acti').removeClass('color_acti');
        $(this).addClass('color_acti');
    });
    $('.size_sty').children().click(function(){
        $(this).parent().find('.size_acti').removeClass('size_acti');
        $(this).addClass('size_acti');
    });




};