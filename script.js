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

AOS.init({
    once: true,
  });

$(document).ready(function() {
  $(".anw").hide(); // 모든 답변 숨기기

  $(".que").click(function () {
    let $nextItems = $(this).nextUntil(".que", ".anw");
    $(this).toggleClass('on');
    $nextItems.stop().slideToggle(300);
  });
});