var loca_login = localStorage['id'];
// console.log();
if (loca_login) {
    $.ajax({
        type: 'GET',
        url: '/varification/' + loca_login,
        // dataType:'json',
        success: function (json) {
            // console.log(json);
            if (!json.sta) {
                window.location = '/userlogin';
            }
        }
    });
}else{
    window.location = '/userlogin';
}
console.log(loca_login);
window.onload = function () {
    $.ajax({
        type: 'GET',
        url: '/UserIndex/' + loca_login,
        datatype: 'json',
        success: function (json) {
            $('.form_class').attr('action','/upload/'+loca_login);
            $('.Username').html(json.username);
            if (json.face != null) {
                $('.Avatar img').attr('src', 'face/' + json.face);
                $('#imgs').attr('src', 'face/' + json.face);
            }
        }
    });

    var exit_login = document.getElementById('exit_login');
    var h3_text = document.getElementById('h3_text');
    var but_yes = document.getElementById('but_yes');
    var but_no = document.getElementById('but_no');
    exit_login.onclick = function(){
        $('.error_box').fadeIn();
        h3_text.innerHTML = '是否退出登录';
    }
    but_yes.onclick = function(){
        localStorage.clear();
        window.location = '/userlogin';
    }
    but_no.onclick = function(){
        $('.error_box').fadeOut();
    }

    // $('.my_taobao').attr('href','/UserIndex');
    $('.shop_car').attr('href', '/cartbuy/' + loca_login);
    $('.Theorderlist').attr('href', '/Theorderlist/' + loca_login);
    $('.Avatar').click(function () {
        // window.location = '/form';
        $('.face_img').fadeIn();

    });


    $('#imgs').click(function () {
        $('#face').click();
    });

    $('#face').change(function () {
        //获取展示图片的区域
        // var img = document.getElementById("imgs");
        //获取文件对象
        var file = $(this)[0].files[0];
        //获取文件阅读器
        var reader = new FileReader();
        // console.log(reader);
        reader.readAsDataURL(file);
        reader.onload = function () {
            // console.log(this);
            $('#imgs').attr('src',this.result);
        }
    });

    $('.exit_x').click(function(){
        $('.face_img').fadeOut();

    });


}
