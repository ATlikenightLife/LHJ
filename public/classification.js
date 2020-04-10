$(function () {

    var article_arr = {
        article_h1:
            [
                {
                    name: '女装',
                    produ: [['连衣裙', './img/asd_1'], ['连衣裙', './img/asd_1'], ['连衣裙', './img/asd_1'], ['连衣裙', './img/asd_1'], ['连衣裙', './img/asd_1'], ['连衣裙', './img/asd_1']]
                },
                {
                    name: '女鞋',
                    produ: [['小白鞋', './img/asd_2'], ['小白鞋', './img/asd_2'], ['小白鞋', './img/asd_2']]
                },
                {
                    name: '男装',
                    produ: [['T恤', './img/asd_3'], ['T恤', './img/asd_3'], ['T恤', './img/asd_3'], ['T恤', './img/asd_3'], ['T恤', './img/asd_3'], ['T恤', './img/asd_3']]
                },
                {
                    name: '家电',
                    produ: [['平板电视', './img/asd_4'], ['平板电视', './img/asd_4'], ['平板电视', './img/asd_4'], ['平板电视', './img/asd_4'], ['平板电视', './img/asd_4'], ['平板电视', './img/asd_4']]
                },
                {
                    name: '美妆',
                    produ: [['护肤套餐', './img/asd_5'], ['护肤套餐', './img/asd_5'], ['护肤套餐', './img/asd_5']]
                }
            ],
        article_h2:
            [
                {
                    name: '品牌墙',
                    produ: [['','./img/bsd_4'], ['','./img/bsd_4'], ['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],
                    ['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4'],['','./img/bsd_4']]
                },
            ],
        article_h3:
            [
                {
                    name: '母婴用品',
                    produ: [['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1'], ['纸尿裤', './img/csd_1']]
                },
                {
                    name: '营养保健',
                    produ: [['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2'], ['美容养颜', './img/csd_2']]
                },
                {
                    name: '美妆',
                    produ: [['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3'], ['护手霜', './img/csd_3']]
                },
                {
                    name: '个护',
                    produ: [['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4'], ['沐浴露', './img/csd_4']]
                },
                {
                    name: '食品',
                    produ: [['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5'], ['巧克力', './img/csd_5']]
                },
                {
                    name: '服装配饰',
                    produ: [['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6'], ['旅行箱', './img/csd_6']]
                },
                {
                    name: '家具家电',
                    produ: [['扫地机器人', './img/csd_7'], ['扫地机器人', './img/csd_7'], ['扫地机器人', './img/csd_7'], ['扫地机器人', './img/csd_7'], ['扫地机器人', './img/csd_7'], ['扫地机器人', './img/csd_7'],]
                },
                {
                    name: '国家馆',
                    produ: [['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8'], ['泰国馆', './img/csd_8']]
                },
            ],
        article_h4:
            [
                {
                    name: '风格馆',
                    produ: [['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1'], ['街头风', './img/dsd_1']]
                },
                {
                    name: '气质裙装',
                    produ: [['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2'], ['印花连衣裙', './img/dsd_2']]
                },
                {
                    name: '时尚内搭',
                    produ: [['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3'], ['蕾丝衫', './img/dsd_3']]
                },
                {
                    name: '百搭裤装',
                    produ: [['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4'], ['铅笔裤', './img/dsd_4']]
                },
                {
                    name: '特色服饰',
                    produ: [['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5'], ['婚纱', './img/dsd_5']]
                },
                {
                    name: '潮流外套',
                    produ: [['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6'], ['风衣', './img/dsd_6']]
                },
                {
                    name: '品牌墙',
                    produ: [['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7'], ['', './img/dsd_7']]
                },
            ],
        article_h5:
            [
                {
                    name: '风格馆',
                    produ: [['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1'], ['国际大牌', './img/esd_1']]
                },
                {
                    name: 'T恤',
                    produ: [['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2'], ['短袖T恤', './img/esd_2']]
                },
                {
                    name: '裤装',
                    produ: [['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3'], ['牛仔裤', './img/esd_3']]
                },
                {
                    name: '衬衫',
                    produ: [['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4'], ['格子衬衫', './img/esd_4']]
                },
                {
                    name: '外套',
                    produ: [['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5'], ['牛仔外套', './img/esd_5']]
                },
                {
                    name: '品牌墙',
                    produ: [['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6'], ['', './img/esd_6']]
                },
            ],

    };


    // 初始(最开始样式)
    for (var i = 0; i < article_arr.article_h1.length; i++) {
        // $('.all_produ').add()
        var tem = article_arr.article_h1[i];
        for (key in tem) {
            if (key == 'name') {
                // alert(1);
                $('.all_produ').append('<p class="col-xs-12">' + tem[key] + '</p>');
            } else {
                for (var a = 0; a < tem[key].length; a++) {
                    $('.all_produ').append('<a class="col-xs-4"><img src="' + tem[key][a][1] + '.webp"width="100%"><p>' + tem[key][a][0] + '</p></a>');
                }
            }
        }
    }

    // 点击变换分类的内容
    var inde = 1;
    $('.all_name li').on('click', function () {
        $('.posi_box').hide();
        $('.acti').removeClass('acti');
        $(this).addClass('acti');
        $('.go_interval a').html('进入'+$(this).html()+'频道');
        // console.log();
        $('.posi_box').html($(this).html());
        $('.all_produ').children().remove();
        inde = $(this).index()+1;
        var tan = article_arr['article_h'+inde]
        // console.dir(tan);
        for (var i = 0; i < tan.length; i++) {
            // $('.all_produ').add()
            var tem = tan[i];
            for (key in tem) {
                if (key == 'name') {
                    // alert(1);
                    $('.all_produ').append('<p class="col-xs-12">' + tem[key] + '</p>');
                } else {
                    for (var a = 0; a < tem[key].length; a++) {
                        $('.all_produ').append('<a class="col-xs-4"><img src="' + tem[key][a][1] + '.webp"width="100%"><p>' + tem[key][a][0] + '</p></a>');
                    }
                }
            }
        }
        if(inde > 2){
            $('.go_interval').show();
        }else{
            $('.go_interval').hide();
        }
    });

    // 分类栏选定的效果
    $('.all_name').scroll(function(){
        // console.log($('.all_name ul').css('height'));
        // console.log($('.all_box').css('height'));
        var heig1 =  parseInt($('.all_name ul').css('height'));
        var heig2 = parseInt($(this).css('height'));
        var heig3 = parseInt($('.all_name li').css('height'));
        // var heig = heig1/(heig1-heig2);
        if($(this).scrollTop() > (inde-1)*heig3){

            $('.posi_box').show().css({top:'0px',bottom:'auto'});
        }else if($(this).scrollTop()+heig2 < inde*heig3){
            $('.posi_box').show();
            $('.posi_box').show().css({top:'auto',bottom:'0px'});
        }else{
            $('.posi_box').hide();
        }
    });

    $('.all_produ').find('a').click(function(){
        if($(this).find('p').text() == '连衣裙'){
            window.location = './list.html';
        }
    });


});