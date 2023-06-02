$(document).ready(function(){


  /* 네비게이션 서브메뉴 슬라이드업다운 */



  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp(); 
  });




  /* box1 탭메뉴 */

  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");  
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle(); 

    let dataImage = $(this).attr("data-image");
    $(".image img").attr("src",dataImage).hide().fadeIn(); 


  });

  /* 메인비쥬얼 페이드인아웃과 롤링______________ */

  let $img = $(".changeimg ul li"); 
  let $btn = $(".btn ul li"); 
  let $lbtn = $(".side_btn .lbtn"); 
  let $rbtn = $(".side_btn .rbtn"); 
  let oldidx=0; 
  let idx=0; 
  let img_n = $img.length;

  
  function changeImg(idx){  

    if(oldidx != idx){ 

      $btn.eq(oldidx).removeClass("active"); 
      $btn.eq(idx).addClass("active"); 
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300"); 

    }
    oldidx = idx; 

  };

  // 롤링

  function changeAuto(){

    idx++;
    
    if(idx > img_n-1){ 
      idx=0;
    }

    changeImg(idx)

  };

  timer = setInterval(changeAuto,4000); 

  //하단버튼 

  $btn.click(function(){

    clearInterval(timer);

    idx=$(this).index();
    changeImg(idx)

    timer = setInterval(changeAuto,4000)

  });


  //좌우버튼 

  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);


  });

  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx < 0){ 
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);


  });



  /* box3 슬라이드 롤링____________ */

  
  
  //다음버튼


$(".ban_btn .ban_right").click(function(){

  $(".slide ul").stop(true,true).animate({marginLeft:"-=355px"},500,function(){
    $(".slide ul li:first-child").appendTo(".slide ul"); 
    $(this).css({marginLeft:"0px"}); 
    console.log()
  });


});



//이전버튼

$(".ban_btn .ban_left").click(function(){

$(".slide ul").stop(true,true).animate({marginLeft:"+=355px"},500,function(){
  $(".slide ul li:last-child").prependTo(".slide ul"); 
  $(this).css({marginLeft:"0px"}); 
});


});
  

});


/* box3 이미지호버시 이미지변경하기_________________ */

// box3 hover effect
/* $(".slide ul li").hover(function(){
  var cake = $(".slide ul li");
  console.log(cake);
}) */

/* $(".slide ul li").hover(function(){
  cake = $(this).attr('class');
  $(this).find("img").attr({"src":"image/"+cake+"_on.png"});


},function(){
  cake = $(this).attr('class');
  $(this).find("img").attr({"src":"image/"+cake+".png"});
  

}) */