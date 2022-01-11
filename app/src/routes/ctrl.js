const output = {
  home: (req, res) => res.render("home"),
  login: (req, res) => res.render("login"),
}

const process = {
  login: (req, res) => {
    console.log(req.body)
    const { id, pw } = req.body
    if (id === "1" && pw === "1234") {
      res.json({ success: true })
    }
    res.json({ success: false, message: '로그인에 실패하였습니다' })
  },
}

module.exports = { output, process }
