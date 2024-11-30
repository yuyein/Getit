const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// 메뉴 버튼 클릭 시 사이드바 열기
menuButton.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("active");
});

// 오버레이 클릭 시 사이드바 닫기
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
