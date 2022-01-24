"use strict"

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  button = document.querySelector("button"),
  form = document.querySelector(".login-form")

form.addEventListener("submit", login)

function login(e) {
  e.preventDefault()
  if (!id.value) return alert("아이디를 입력하세요")
  if (!pw.value) return alert("비밀번호를 입력하세요")
  const req = {
    id: id.value,
    pw: pw.value,
  }
  fetch("/login", {
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
      location.href = "/"
    })
    .catch((err) => console.error(err))
}
