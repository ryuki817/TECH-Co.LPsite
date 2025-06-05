"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
    nullTargetWarn: false,
  });



// スライドイン  
gsap.fromTo(
    ".js_service",
    {
      y: 200,   
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "Power4.inOut",
      scrollTrigger: {
        trigger: "#course",
        start: "top top",
        // markers:true,
      },
      stagger: {
        each: 0.2,
        from: "start",
      },
    }
  );