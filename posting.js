// 저장하기 버튼 관련 코드
const saveButton = document.querySelector(".save-button");
const diaryInput = document.getElementById("diary-input");
const diaryPostsContainer = document.getElementById("diary-posts-container");

// 저장하기 버튼 클릭 시
saveButton.addEventListener("click", function () {
  const inputText = diaryInput.value.trim(); // 입력한 텍스트 가져오기
  if (inputText === "") {
    alert("텍스트를 입력하세요!"); // 입력값이 없을 경우 경고
    return;
  }

  // 새로운 글 추가
  const newPost = document.createElement("div");
  newPost.classList.add("diary-post");

  const postContent = document.createElement("span");
  postContent.textContent = inputText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");

  // 삭제 버튼 클릭 시 해당 글 삭제
  deleteButton.addEventListener("click", function () {
    newPost.remove();
  });

  newPost.appendChild(postContent);
  newPost.appendChild(deleteButton);
  diaryPostsContainer.prepend(newPost); // 새 글을 상단에 추가

  diaryInput.value = ""; // 입력창 초기화
});

// 사이드바 메뉴 관련 코드
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
