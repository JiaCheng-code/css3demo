window.onload = function () { 
    let secondcont = 60;
    let minutecont = 60;
    let hourcont = 24;
    let daycont = 31;
    let mounthcont = 12;
    let secode = '';
    for(let i =0;i<secondcont;i++){
        secode +="<div id='second"+(i+1)+"' style='position: absolute; transform: rotate("+(i*-6)+"deg);display: inline-block;color: white;text-align: right;width: 100%;font-size: 16px;transform-origin: 45vh;'>"+(i+1)+"秒</div>";
    }
    document.querySelector(".secondBox").innerHTML = secode;
    secode = '';
    for(let i =0;i<minutecont;i++){
        secode +="<div id='minute"+(i+1)+"' style='position: absolute; transform: rotate("+(i*-6)+"deg);    display: inline-block;text-align: right;width: 100%;font-size: 16px;color: white;transform-origin: 37.5vh;'>"+(i+1)+"分</div>";
    }
    document.querySelector(".minuteBox").innerHTML = secode;
    secode = '';
    for(let i =0;i<hourcont;i++){
        secode +="<div id='hour"+(i+1)+"' style='position: absolute; transform: rotate("+(i*-15)+"deg);display: inline-block;text-align: right;font-size: 16px;width: 100%;color: white;transform-origin: 30vh;'>"+(i+1)+"时</div>";
    }
    document.querySelector(".hourBox").innerHTML = secode;
    secode = '';
    for(let i =0;i<daycont;i++){
        secode +="<div id='day"+(i+1)+"'  style='position: absolute; transform: rotate("+(i*-11.25)+"deg);text-align: right;font-size: 16px;width: 100%;color: white;transform-origin: 22.5vh;'>"+(i+1)+"日</div>";
    }
    document.querySelector(".dayBox").innerHTML = secode;
    secode = '';
    for(let i =0;i<mounthcont;i++){
        secode +="<div id='mounth"+(i+1)+"' style='position: absolute; transform: rotate("+(i*-30)+"deg);text-align: right;font-size: 16px;width: 100%;color: white;transform-origin: 15vh;'>"+(i+1)+"月</div>";
    }
    document.querySelector(".mounthBox").innerHTML = secode;
    var sencond360 = 0;
    var Minute360 = 0;
    var hour360 = 0;
    var day360 = 0;
    var mounth360 = 0;

    var oldsencond = 0;
    var oldMinute = 0;
    var oldhour = 0;
    var oldday = 0;
    var oldmounth = 0;

    function move(){

        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        let s = date.getSeconds();

        if(s ===0 && oldsencond!==s){
            sencond360 = sencond360+1;
        }
        if(i ===0 && oldMinute!==i){
            Minute360 = Minute360+1;
        }
        if(h ===0 && oldhour!==h){
            hour360 = hour360+1;
        }
        if(d ===1 && oldday!==d){
            day360 = day360+1;
        }
        if(m ===0 && oldmounth!==m){
            mounth360 =mounth360+1;
        }
        let year = document.querySelector('.year');
        let mouth = document.querySelector('.mounthBox');
        let day = document.querySelector('.dayBox');
        let hour = document.querySelector('.hourBox');
        let minute = document.querySelector('.minuteBox ');
        let secode = document.querySelector('.secondBox');
        mouth.style.transform = "rotate("+((mounth360*360)+(30*m))+"deg)";
        // console.log(sencond360)
        day.style.transform = "rotate("+((day360*360)+(11.25*(d-1)))+"deg)";
        hour.style.transform = "rotate("+((hour360*360)+(15*(h-1)))+"deg)";
        minute.style.transform = "rotate("+((Minute360*360)+(6*(i-1)))+"deg)";
        secode.style.transform = "rotate("+((sencond360*360)+(6*s))+"deg)";
        let active = document.querySelectorAll('.active');
        active.forEach(element=>{
            element.classList = ''
        })
        document.querySelector(`#mounth${m+1}`).classList ='active';
        document.querySelector(`#day${d}`).classList ='active';
        document.querySelector(`#hour${h}`).classList ='active';
        document.querySelector(`#minute${i}`).classList ='active';
        document.querySelector(`#second${s+1}`).classList ='active';

        oldsencond = s;
        oldMinute = i;
        oldhour = h;
        oldday = d;
        oldmounth = m;
    }
    move();
    setInterval(()=>{
        move();
    },1000);
    var rHref = 'https://github.com/';
    e = ["\n %c %c %c Theme GitHub - %c  %c "+rHref+"  %c \n\n", "background: #fadfa3; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "background: #FCEDC9; padding:5px 0;", "background: #fadfa3; padding:5px 0;"];
    window.console.log.apply(console, e);
 }