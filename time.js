var t1 = document.getElementById("time");
setInterval(function()
{
    var str = '2024/02/09  00:00:00';
    var endDateMs = new Date(str).getTime();
    var nowDateMs = new Date().getTime();
    var value = endDateMs - nowDateMs;
    var  year = parseInt(value / 1000 / 60 /  60 /24 / 365);
    var  month = parseInt(value / 1000 / 60 /  60 /24 / 30 %12);
    var  day = parseInt(value / 1000 / 60 /  60 /24 %30);
    var  hour = parseInt(value / 1000 / 60 /  60 %24);
    var  minute = parseInt(value / 1000 / 60 %60);
    var  second = parseInt(value / 1000  %  60);
    var  millisecond = parseInt(value % 1000 );
    month = month<10?'0'+month:month;
    day = day<10?'0'+day:day;
    hour = hour<10?'0'+hour:hour;
    minute = minute<10?'0'+minute:minute;
    second = second<10?'0'+second:second;
    if(millisecond<10){
        millisecond='00'+millisecond;
    }
    else if(millisecond<10){
        millisecond='0'+millisecond;
    }

    var countdown = year + '年' +month + '月' +day +'日'+hour+'小时'+minute+'分' +second+'秒'+millisecond+'毫秒';
    t1.innerHTML = countdown;
},100);