const Login = async (req, res) => {
  res.render('login')
}
const Register = async (req, res) => {
  res.render('register')
}

const PostRegister = async (req, res) => {
  console.log(req.body)
  res.cookie("walletID", req.body.wallet_id);
  res.cookie("role", req.body.role);
  res.cookie("name", req.body.name);
  res.json("OK")
}

const PostLogin = async (req, res) => {
  console.log(req.body)
  res.cookie("walletID", req.body.wallet_id);
  res.cookie("role", req.body.role);
  res.cookie("name", req.body.name);
  res.json("OK")
}


module.exports = {
  Login,
  Register,
  PostRegister,
  PostLogin
}