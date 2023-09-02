const naverLoginBtn = document.querySelector(".naver-login-btn");
naverLoginBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8000/api/login/naver";
});
