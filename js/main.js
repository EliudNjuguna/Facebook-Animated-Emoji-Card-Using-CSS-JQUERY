$(document).ready(function(){
    flag=1;
   $("#circle").click(function(){
       if(flag==1){
           $("#circle").delay(300).css('height','80px');
           $("#circle").delay(300).css('width','80px');
           $("#circle").css('transition','all .2s');
           
           setTimeout(anim,100);
           
           function anim(){
           $("#circle").css('height','250px');
           $("#circle").css('width','400px');
           $("#circle").css('border-radius','15px');
           $("#circle img").animate({marginTop:'-70px'},300);
           $("#msg").css('font-size','14px');
               
            $("#img1").animate({left:'31%',top:'27%'},300);
            $("#img2").animate({left:'29%',top:'67%'},300);
            $("#img3").animate({left:'60%',top:'78%'},300);
            $("#img4").animate({left:'57%',top:'22%'},300);
            $("#img5").animate({left:'32%',top:'57%'},300);
            $("#img7").animate({left:'47%',top:'26%'},300);
            $("#img8").animate({left:'43%',top:'74%'},300);
            $("#img9").animate({left:'68%',top:'48%'},300);
            $("#img6").animate({left:'66.5%',top:'67%'},300);
        }
           flag=0;
       }else{
           $("#circle").css('transition','all .2s');
           $("#circle").delay(300).css('height','260px');
           $("#circle").delay(300).css('width','420px');
           
           setTimeout(anim,100);
           
           function anim(){
               $("#circle img").animate({marginTop:'0px'},200);
               $("#msg").css('font-size','0px');
               
               $("#circle").css('height','100px');
               $("#circle").css('width','100px');
               $("#circle").css('border-radius','50px');
               
               $(".emoji").css('top','50%');
               $(".emoji").css('left','50%');
               
               flag=1;
           }
           
       }
   }) ;
});