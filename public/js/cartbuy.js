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

var arr  = [];

$(function(){

    var sel = 0;  //选中的商品数量

    //为每个勾选按钮绑定点击事件
    $('.select-all').children().on('click',function(){
        // 此变量为是否选中，选中时false
        var tu = $(this).attr('data-tu');
      
       
        // 如果点击的是全选按钮
        if($(this).attr('id') == 'allsel'){
            // console.log($('.select-all').children().length);
            $(this).toggleClass('btn-icom2');
            // console.log ($(this).attr('data-tu'));
            console.log(arr);
            arr = [];
            //  勾选
            if( $(this).attr('data-tu') == 'true' ){
                // console.log('勾选');
                
                for(var i = 0 ; i < $('.select-all').children().length-1 ; i++){
                    // 勾选按钮的状态值  选中的按钮为false
                    arr.push($('.select-all').children().eq(i).attr('data-id'));
                    var tu1 = $('.select-all').children().eq(i).attr('data-tu');
                    // console.log(tu1);
                    
                    if(tu1 == 'true'){
                        $('.select-all').children().eq(i).click();
                    }
                }
                $(this).attr('data-tu','false');  //改变全选按钮的状态
            }else{  // 取消勾选
                // console.log('取消勾选');
                for(var i = 0 ; i < $('.select-all').children().length-1 ; i++){
                    var tu1 = $('.select-all').children().eq(i).attr('data-tu');
                    // console.log(tu1);
                    
                    if(tu1 == 'false'){
                        $('.select-all').children().eq(i).click();
                    }
                }
                $(this).attr('data-tu','true');  //改变全选按钮的状态
            }
            
            return;
        }

        // 当前商品的单价和数量
        var pic = $(this).parent().next().children().eq(1).children().eq(1).children().eq(0).children().html().slice(1);
        var num = $(this).parent().siblings().children().eq(1).children().eq(1).children().eq(1).children().eq(0).children().eq(1).val();
        // console.log(num);

        //当前商品的总价格：单价*数量
        str = Number(pic) * Number(num);        
        // console.log(str);

        //勾选当前商品
        if(tu == 'true'){
            $(this).addClass('btn-icom2').attr('data-tu','false');
            arr.push($(this).attr('data-id'));
            sel += 1;
            count(str);
        }else{      //取消勾选当前商品
            $(this).removeClass('btn-icom2').attr('data-tu','true');
            for(var i=0;i<arr.length;i++){
                if($(this).attr('data-id') == arr[i]){
                    arr.splice(i,1);
                }
            }
            sel -= 1;
            count((-str));
        }
    })

    // console.log($('.select-all .btn-icom').length);
    // 改购物车的数量
    $('.title').children().eq(1).html('('+($('.select-all .btn-icom').length-1)+')');

    // 定义统计函数（参数为商品的单价*数量）     用于修改合计与结算
    function count(num){
        // console.log(num);
        var sum = $('.settlement-bar .submit-wrapper .price').html().slice(1);
        sum = (sum*1 + num).toFixed(2) ;
        
        $('.settlement-bar .submit-wrapper .price').html('￥'+sum);      //合计
        $('.settlement-bar .submit-wrapper .submit').html('结算('+sel+')'); //结算
    }

    // 点击加减按钮
    $('.btn1').on('click',function(){
        var num = $(this).next().val();
        // console.log(num);
        if(Number(num) <= 1 ){
            alert('购买数量不能小于一件');
        }else{
            // 改变数量：当前-1
            $(this).next().val(num*1-1)
            // 如果当前商品是选中状态
            if( $(this).parent().parent().parent().parent().parent().siblings().children('span').attr('data-tu') =='false' ){
                // 当前商品的单价  转换成number类型
                var pic = $(this).parent().parent().siblings().children().eq(0).html().slice(1)*1;
                var sum = -pic;
           
                count(sum);
            }
        }
    }).next().next().on('click',function(){
        //当前的数量
        var num = $(this).prev().val();
        // console.log(num); 

        // 改变数量：当前+1 
        $(this).prev().val(num*1+1);
        // 如果当前商品是选中状态
        if( $(this).parent().parent().parent().parent().parent().siblings().children('span').attr('data-tu') =='false' ){
            // 当前商品的单价   转换成number类型
            var pic = $(this).parent().parent().siblings().children().eq(0).html().slice(1)*1;  
       
            count(pic); //调用统计函数
        }
    });


    // 点击删除  使用ajax传输商品的id值，在数据库删除数据
    $('.del').on('click',function(){
        var goodsid =Number( $(this).attr('data-id'));
        // console.log(goodsid);
        $.ajax({
            type: 'GET',
            url: "/del/"+goodsid,
            dataType: "json",
            success: function(json){
                // console.log(json);
              
                window.location.reload();//刷新页面
            
            }
        });
    });

    
    
})

$('.cli_submit').click(function(){
    localStorage['carid'] = JSON.stringify(arr);
    window.location.href = '/orders';
});

// $('.shop_car').attr('href','/cartbuy/'+loca_login);
$('.Theorderlist').attr('href','/Theorderlist/'+loca_login)