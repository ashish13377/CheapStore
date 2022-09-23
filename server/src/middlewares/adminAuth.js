const adminAuth = (req, res, next) => {
  console.log("Hi");
  const token = req.cookies.jwt;
  if (token === process.env.ADMIN_TOKEN) {
    next();
  } else {
    res.status(422).json({ msg: "JWT not verified" });
  }
};

module.exports = adminAuth;
