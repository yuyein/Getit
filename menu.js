const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

// 햄버거 메뉴 버튼 클릭 시 메뉴 열기
menuButton.addEventListener("click", () => {
  sidebar.classList.add("open");
});

// 메뉴 외부 클릭 시 메뉴 닫기
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});
