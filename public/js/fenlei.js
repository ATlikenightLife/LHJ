




$(function(){
    $('.main-left-warp ul li').click(function () {
        $(this).addClass('dot').siblings().removeClass('dot');
        $('.left-icon').hide().eq($(this).index()).show();
      
        // console.log($(this).attr('data-id'));
        ajax($(this).attr('data-id'));  //将父级id传入
    });
    //默认点击第一个按钮
    $('.main-left-warp ul li:first').click();

    function ajax(that){
        var num = that*1;
        $.ajax({
            type:'GET',
            url:'/menu/'+num,
            dataType:"json",
            success:function(json){
                // console.log(json);  
                var arr = json;     //接收数组

                //考虑到第一个菜单的的特殊性，给他单独创建html代码
                if(num == 1){
                    // console.log(arr);
                    
                    $('.nav-content').children().remove();     //删除所有子元素
                    var $div = $('<div class="row phb"><div class="title">排行榜</div><div class=" row container1"><div class="phb-1"><img src="images/TBfenlei1.png" class="phb-1-img1"><span class="phb-1-title">人气榜</span><img src="images/下载.png" class="phb-1-img2"></div><div class="phb-1"><img src="images/TBfenlei2.png" class="phb-1-img1"><span class="phb-1-title">人气榜</span><img src="images/下载.png" class="phb-1-img2"></div><div class="phb-1"><img src="images/TBfenlei3.png" class="phb-1-img1"><span class="phb-1-title">人气榜</span><img src="./images/下载.png" class="phb-1-img2"></div></div></div></div>');
                    $('.nav-content').append($div);
                    for( var i = 0;i<arr.length;i++){
                        if(arr[i].pid == num){      //如果是二级菜单，则打印在标题框中
                            var $title = $('<div class="title">'+arr[i].name+'</div>');
                            var $div4 = $('<div class="rmlm-content"></div>');  //三级菜单最外部容器
                            var str = String(arr[i].name);
                            $('.nav-content').append($title,$div4);//添加新建的子元素
                        }else{
                           
                            var $div5 = $('<div class="rmlm-warp" data-id="'+arr[i].id+'"></div>');     //三级菜单容器
                            var $div8 = $('<div class="rmlm-img-title"></div>');  //三级菜单标题框(图片标题)
                            var $span = $('<span class="rmlm-h3">'+arr[i].name+'<span>');//三级菜单标题
                            var $img = $('<img src="images/girl/潮流外套/'+i+'.webp" class="rmlm-img" >'); //图片
                            
                            $div4.append($div5);
                            $div8.append($span);

                            $div5.append($img,$div8);
                           
                        }
                    }       
                    

                
                }else{
                    // console.log('进来了');
                    // console.log(arr);
                    $('.nav-content').children().remove();
                    
                    for( var i = 0;i<arr.length;i++){
                        if(arr[i].pid == num){      //如果是二级菜单，则打印在标题框中
                            
                            var $div3 = $('<div class="rmlm"></div>');  //二级菜单容器
                            var $title = $('<div class="title">'+arr[i].name+'</div>');  //二级菜单标题
                            var $div4 = $('<div class="rmlm-content"></div>');  //三级菜单最外部容器
                            var str = String(arr[i].name);
                            
                            $div3.append($title,$div4);
                        
                            $('.nav-content').append($div3);
                            
                        }else{
                            var $div5 = $('<div class="rmlm-warp" data-id="'+arr[i].id+'"></div>');     //三级菜单容器
                            var $div8 = $('<div class="rmlm-img-title"></div>');  //三级菜单标题框(图片标题)
                            var $span = $('<span class="rmlm-h3">'+arr[i].name+'<span>');//三级菜单标题
                        
                            
                            // var $img = $('<img src="./images/girl/'+arr[0].name+'/1.webp" class="rmlm-img" >'); //图片
                            if( num == 2 ){
                                // console.log(arr[i].name);
                                // console.log(str);
                                
                                var $img = $('<img src="./images/girl/'+str+'/1.webp" class="rmlm-img" >'); //图片
                            }else{
                                var $img = $('<img src="./images/boy/'+str+'/1.webp" class="rmlm-img" >'); //图片                                
                            }
                            $div4.append($div5);
                            $div8.append($span);

                            $div5.append($img,$div8);
                        }
                    } 
                }
               
            }
        });
    }

    var $height = $(window).height();
    $('.main-left').css({ height: $height });
    $('.main-right').css({ height: $height });

    $('.qz-content div:first').click(function(){
        // console.log(1);
        // window.location = './shop.html';
    });
    

    $('body').on('click','.rmlm-warp',function(){
        var id = $(this).attr('data-id');
        window.localStorage['loca'] = '/shop/'+id;
        window.location = '/shop/'+id;
        // console.log($(this).attr('data-id'));
    });




});