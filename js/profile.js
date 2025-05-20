AOS.init();

// 마우스 커서 -----------
const cursor = document.querySelector('.custom-cursor');

// 마우스 움직일 때 커서 위치
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// pointer 커서가 필요한 요소 위에서 hover 효과 적용
const pointerElements = document.querySelectorAll('a, button, .pointer-hover');

pointerElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});


// top-bar 드롭다운 -----------------
$(".dropdown-toggle").click(function (e) {
  e.stopPropagation();

  // 모든 드롭다운 닫고, 아이콘 원복
  $(".dropdown-menu").not($(this).next()).slideUp(200);
  $(".arrow-icon")
    .not($(this).find(".arrow-icon"))
    .removeClass("arrow-rotated");

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