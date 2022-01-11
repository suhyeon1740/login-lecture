"use strict"

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  button = document.querySelector("button")

button.addEventListener("click", login)

function login() {
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
        alert(result.message)
        return
      }
      location.href = "/"
    })
    .catch((err) => console.error(err))
}
