const Login = async (req, res) => {
  res.render('login')
}
const Register = async (req, res) => {
  res.render('register')
}

const Post = async (req, res) => {
  res.cookie("walletID", req.body.wallet_id);
  res.cookie("role", result.role);
  res.cookie("name", result.name);
  res.json("OK")
}


module.exports = {
  Login,
  Register,
  Post,
}