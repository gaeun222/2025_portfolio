// top-bar 드롭다운 -----------------
$(".dropdown-toggle").click(function (e) {
    e.stopPropagation();

    // 모든 드롭다운 닫고, 아이콘 원복
    $(".dropdown-menu").not($(this).next()).slideUp(200);
    $(".arrow-icon").not($(this).find(".arrow-icon")).removeClass("arrow-rotated");

    // 현재 메뉴 토글
    $(this).next(".dropdown-menu").slideToggle(200);

    // 이미지 회전 토글
    $(this).find(".arrow-icon").toggleClass("arrow-rotated");
  });

  $(document).click(function () {
    $(".dropdown-menu").slideUp(200);
    $(".arrow-icon").removeClass("arrow-rotated");
  });

  $(".dropdown-menu").click(function (e) {
    e.stopPropagation();
  });

// recent works 시작 ---------------- 
gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
    $(".section-group--stack-up").each(function (index, node) {
        console.log(node)
        var $group = $(node);
        var $section = $group.find(" > .section:not(:first-child)");

        $section.each(function (index, node) {
            var $sectionOne = $(node);

            gsap.to($sectionOne, {
                ease: "none",
                scrollTrigger: {
                    trigger: $sectionOne,
                    start: "top 100%",
                    end: "bottom 100%",
                    pin: $sectionOne.prev(),
                    pinSpacing: false,
                    scrub: true
                }
            });
        });
    });
}

SectionGroup__init();


// 아코디언 메뉴 ---------------------
$(document).ready(function() {
  $(".anw").hide(); // 모든 답변 숨기기

  $(".que").click(function () {
    let $nextItems = $(this).nextUntil(".que", ".anw");
    $(this).toggleClass('on');
    $nextItems.stop().slideToggle(300);
  });
});


// 인트로 ---------------------
$(document).ready(function () {
  const $load = $(".load");
  const $percent = $(".load_per");
  let current = 0;

  const interval = setInterval(function () {
    current++;
    $percent.text(current + "%");

    if (current >= 100) {
      clearInterval(interval);

      setTimeout(function () {
        $load.addClass("slide-up");

        // slide-up 애니메이션 끝나고 실행
        setTimeout(function () {
          // 1. AOS 초기화
          AOS.init({ once: true });

          // 2. flow-txt 안 요소들 관련 작업 실행
          startMarqueeText();
        }, 400); // slide-up CSS 애니메이션 시간과 동일
      }, 500);
    }
  }, 20);

  // flow-txt 애니메이션 실행 함수
  function startMarqueeText() {
    // 예: 클래스 추가
    $(".marquee-wrap").each(function (i) {
      const $el = $(this);
      setTimeout(() => {
        $el.addClass("in"); // 또는 원하는 처리
      }, 1000);
    });
  }
});
