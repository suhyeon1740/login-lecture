"use strict"

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  confirmPw = document.querySelector("#confirm-pw"),
  button = document.querySelector("button")

button.addEventListener("click", register)

function register(e) {
  e.preventDefault()
  if (!id.value) return alert("아이디를 입력하세요")
  if (pw.value !== confirmPw.value) return alert("비밀번호가 일치하지 않습니다")
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  }
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.success == false) {
        if (result.err) return alert(result.err)
        alert(result.message)
        return
      }
      location.href = "/login"
    })
    .catch((err) => console.error(err))
}
