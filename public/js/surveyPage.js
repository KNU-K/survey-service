const loginBtn = document.querySelector(".naver-logout");
const sendBtn = document.querySelector(".send");
loginBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8000/api/logout";
});
sendBtn.addEventListener("click", async () => {
  // await axios.post('http://localhost:8000/api/survey',{

  // })
  const answerList = document.querySelectorAll("li:not([class])");
  const sendData = [];
  for (answer of answerList) {
    const q = answer.childNodes[1].innerText;
    if (answer.childNodes[5].type == "textarea") {
      sendData.push({ q: q, a: answer.childNodes[5].value });
    } else {
      const checklist = answer.childNodes[5].childNodes;

      const elementsWithClass = [];

      for (const node of checklist) {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.length > 0) {
          // 클래스가 있는 엘리먼트만 선택
          elementsWithClass.push(node);
        }
      }
      const results = [];
      for (const box of elementsWithClass) {
        if (box.childNodes[1].checked) {
          results.push(box.childNodes[2].nodeValue.trim());
        }
      }

      sendData.push({ q: q, a: results });
    }
  }
  const res = await axios.post("http://localhost:8000/api/survey", sendData);
  if (res.data.code === 200) {
    alert("succeed registration");
    window.location.href = "/";
  }
});
