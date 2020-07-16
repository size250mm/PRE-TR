


window.onload = function(){
    setTimeout(function(){
        scrollTo(0,0)
    },100);
}

$(document).ready(function(){
    $('.head-box').animate({right:'0'},0,function(){
    $('.head').find('.head-bottom').animate({top:'0'},1000)    
    })
    $('.page-indi').find('p>a').animate({left:'0'})
    $('.to-bottom').addClass('on');
})

var X =0;
$('.ham-btn').click(function(){
    X++;
    X=X%2;

    console.log(X);
    if(X == 1){
        $('.ham-nav').stop().animate({left:'120'+'px'},1000);
        $('.nav-line').css({background:'black'});
        $('.ham-line').css({background:'black'});
        $('.indi').css({color:'black'});
        $('.nav-bg-slide').animate({top:'0'})
    }else if(X == 0){
        $('.ham-nav').stop().animate({left:'-120'+'%'},1000);
        $('.nav-line').css({background:'white'});
        $('.ham-line').css({background:'white'});
        $('.indi').css({color:'white'});
        $('.nav-bg-slide').animate({top:'-100'+'%'})
    }
})

$(window).on('scroll', function(){
    var percent = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    console.log(percent);
    $('.right-pro-down').css({height:percent+'%'});   
         if(percent == 100){
             $('.to-bottom').removeClass('on');
             $('.to-bottom span').eq(0).addClass('off1');
             $('.to-bottom span').eq(1).addClass('off2');
             $('.sub-bottom').find('.head-bottom').stop().animate({top:'0'}); 
             $('.start-text p').stop().animate({top:'0'})
             
             
         }
          if(percent != 100){
             $('.to-bottom').addClass('on');
             $('.to-bottom span').eq(0).removeClass('off1');
             $('.to-bottom span').eq(1).removeClass('off2');
              
        
              
           }
})

    $('html').on('mousewheel',function(event){
        delta=event.originalEvent.wheelDelta
        has_animate=$('html').is(':animated');
        var win_top = $(document).scrollTop();
//        var percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
//
//         $('.right-pro-down').stop().animate({height:percent+'%'})
//          console.log(percent+'per');
////        console.log(about_top);
////        console.log(main_top);
////        console.log(my_info_top);
////        console.log(me_top);
////        console.log(skills_top);
////        console.log(win_top);
//         if(percent == 100){
//             $('.to-bottom').removeClass('on');
//             $('.to-bottom span').eq(0).addClass('off1');
//             $('.to-bottom span').eq(1).addClass('off2');
//             $('.sub-bottom').find('.head-bottom').stop().animate({top:'0'}); 
//             $('.start-text p').stop().animate({top:'0'})
//             
//         }
//          if(percent != 100){
//             $('.to-bottom').addClass('on');
//             $('.to-bottom span').eq(0).removeClass('off1');
//             $('.to-bottom span').eq(1).removeClass('off2');
//         }
    })
    function bot_move(){
        
         $('.sub-left').find('.box1').stop().animate({
           width:'20'+'%'
       },500,function(){
            $('.sub-left').find('.box2').stop().animate({
           width:'20'+'%'
       },500,function(){
                $('.sub-left').find('.box1').stop().animate({left:'30'+'%',zIndex:'9999'},500,function(){
                    $('.sub-left').find('.box1').stop().animate({top:'-100'+'%'},1000)
                })
                $('.sub-left').find('.box2').stop().animate({left:'50'+'%',zIndex:'10000'},500,function(){
                    $('.sub-left').find('.box2').stop().animate({height:'100'+'%',top:'-50'+'%'},1000,function(){
                        $('.sub-left').find('.box2').stop().animate({
                            left:'0',width:'100'+'%',zIndex:'10000'
                        },1000,function(){
//                           window.open('indexTRAIRLINE.html','_self')
                            setTimeout(function() {
	window.open('indexcgv.html','_self');
      }, 1000);
  ;
                        })
                    })
                })
            })
       })
    }

   


    $('.sub-bottom').find('.head-bottom').click(function(){
         bot_move();
         
         
   })

$('.totop').click(function(){
    $(window).animate({scrollTop:0})
})












