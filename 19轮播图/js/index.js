window.onload = function () { 
    var curindex = 0;
    var totallunbo = document.querySelector(".lunbo")
    var maxlen = totallunbo.getElementsByTagName("li").length-1;
    var li = totallunbo.getElementsByTagName("li");

    var totalOption = document.querySelector(".con").getElementsByTagName("li");
    var timer = null
    var width = 600;
    console.log(maxlen)
    timer = setInterval(move,3000);
    function move() { 
        curindex++;
        if (curindex>maxlen) {
            curindex = 0;
        }
        for(var i = 0; i <= maxlen; i++) {
            totalOption[i].className = '';
        }
        totallunbo.style.left = "-"+width*curindex+"px";
        totalOption[curindex].className = 'active';
     }

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