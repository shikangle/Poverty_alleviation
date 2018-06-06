$(function(){
	var countdown=60; 
	
	$(".btn").click(function(){
		var obj = $('.btn')
		settime(obj)
	})
//	function send(){
//	    var obj = $(".btn");
//	    settime(obj);
//	    
//	    }
	function settime(obj) { //发送验证码倒计时
	    if (countdown == 0) { 
	        obj.attr('disabled',false); 
	        //obj.removeattr("disabled"); 
	        obj.val("免费获取验证码");
	        countdown = 60; 
	        return;
	    } else { 
	        obj.attr('disabled',true);
	        obj.val("重新发送(" + countdown + ")");
	        countdown--; 
	    } 
	setTimeout(function() { 
	    settime(obj) }
	    ,1000) 
	}

	//姓名失去焦点
	$(".panel .username").blur(function(){
        var cur = $(this);
        var value = cur.val();
        var filter  = /^[\u4E00-\u9FA5A-Za-z]+$/;  //正则
        checkTip(cur,value,filter,'姓名不能为空','姓名输入不合法');
    });
		//手机号失去焦点
		$(".panel .phone").blur(function(){
        var cur = $(this);
        var value = cur.val();
        var filter  = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;  //正则
        checkTip(cur,value,filter,'手机号码不能为空','手机号码输入错误');
    });

	//密码失去焦点
    $(".panel .idcard").blur(function(){
        var cur = $(this);
        var value = cur.val();
        var filter  = /^[a-zA-Z]\w{5,17}$/;  //正则
        checkTip(cur,value,filter,'身份证不能为空','身份证输入错误');
    });
    //公共方法
    function checkTip (cur,value,filter,text1,text2) {
    	if(value ==''){
            cur.siblings(".error-tip").slideDown().text(text1);
        }else if(!filter.test(value)){   //正则匹配
             cur.siblings(".error-tip").slideDown().text(text2);
        }else {
            cur.siblings(".error-tip").slideUp();
        };
    }
    $(".login-btn").click(function(){
  	$(".msg-tip").css({'display':'block','right':'0'})
    })
//   $(".login-contant .login-btn").on('focus',function(){
//      $(this).find(".error-tip").slideUp();  //find()   next()   siblings()
//      $(".msg-tip").animate({'right':'-50%'},300);
//  });

	
})