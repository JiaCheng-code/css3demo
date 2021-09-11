window.onload = function () { 
    var curindex = 0;
    var totallunbo = document.querySelector(".lunbo")
    var maxlen = totallunbo.getElementsByTagName("li").length-1;
    var li = totallunbo.getElementsByTagName("li");

    var totalOption = document.querySelector(".con").getElementsByTagName("li");
    var timer = null
    var width = 600;

    //循环播放move函数
    timer = setInterval(move,3000);
    function move() { 
        curindex++;
        if (curindex>maxlen) {
            //使轮播回到第一张
            curindex = 0;
        }
        for(var i = 0; i <= maxlen; i++) {
            totalOption[i].className = '';
        }
        totallunbo.style.left = "-"+width*curindex+"px";
        totalOption[curindex].className = 'active';
     }
     //在for循环里面是一个自执行函数时，在每次循环的过程中会把每个自执行函数在内存中储存起来，对应的i的值也储存在函数中。在循环过后（循环速度很快）,如果自执行函数里面有事件，就在事件触发的时候把i传递给事件处理函数的形参，然后执行；如果自执行函数里面没有事件，就会按照顺序一一执行。
      for(var i = 0;i<=maxlen;i++){
          (function(i) { 
            totalOption[i].index = i;
            totalOption[i].onmousemove = function () { 
                for(var j = 0; j <= maxlen; j++) {
                    totalOption[j].className = '';
                }
                this.className = 'active';
                if(this.index == 0) {
                    return(function() {
                        totallunbo.style.left = 0 + 'px';
                        curindex = 0;
                    }())
    
                }else if(this.index == 1){
                    return(function() {
                        totallunbo.style.left = -600 + 'px';
                        curindex = 1;
                    }())
                }else if(this.index == 2){
                    return(function() {
                        totallunbo.style.left = -1200 + 'px';
                        curindex = 2;
                    }())
                }else if(this.index == 3){
                    return(function() {
                        totallunbo.style.left = -1800 + 'px';
                        curindex = 3;
                    }())
                }else if(this.index == 4){
                    return(function() {
                        totallunbo.style.left = -2400 + 'px';
                        curindex = 4;
                    }())
                }
             }
           }(i))
           
      }
      
 }