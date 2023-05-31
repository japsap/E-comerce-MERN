const router = require("express").Router();
const authService = require("../Services/authService");

const jwt = require("../utils/jsonwebtoken");

router.post("/register", async (req, res) => {
  const userPfp = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
  const bio = "";

  const { username, email, password, repeatPassword } = req.body;

  const existingUser = await authService.getUsername(username);

  if (existingUser) {
    return res
      .status(404)
      .json({ status: 404, message: "Username already used!" });
  }

  const existingEmail = await authService.getUserEmail(email);

  if (existingEmail) {
    return res
      .status(404)
      .json({ status: 404, message: "Email already used!" });
  }

  if (password != repeatPassword) {
    return res
      .status(404)
      .json({ status: 404, message: `Passwords don't match! ` });
  }

  try {
    const user = await authService.register(
      username,
      email,
      password,
      userPfp,
      bio,
    );
    res.status(201).json({ status: 201, user });
  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (keys) => err.errors[keys].message,
    );
    return res.status(404).json({ status: 404, error: errors });
  }
});

router.post("/login", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  if (password != repeatPassword) {
    return res
      .status(404)
      .json({ status: 404, message: `Passwords don't match! ` });
  }

  try {
    const token = await authService.login(email, password);
    res.json({ status: 201, token });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ status: 404, message: err.message });
  }
});


router.get('/login', async (req, res) => {
  const token = req.headers['auth']

  await jwt.verify(token, "0823r5bsdfdgkljb89y234biojadnfg")
    .then(info => res.json(info))
    .catch(err => res.json(err));
})


module.exports = router;
