const validateUserRequest = (req, res, next) => {
  const { name, email, password } = req.body;
  const { image } = req.file || {};
  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({
      data: {},
      message: "Bad request",
      success: false,
      err: {},
    });
  }

  req.body.rollNo = req.body.rollNo || null;
  req.body.linkedin_url = req.body.linkedin_url || null;
  req.body.github_username = req.body.github_username || null;
  req.body.resume_url = req.body.resume_url || null;
  req.body.portfolio_url = req.body.portfolio_url || null;
  req.body.twitter_url = req.body.twitter_url || null;
  req.body.instagram_url = req.body.instagram_url || null;
  req.body.leetcode_username = req.body.leetcode_username || null;
  req.body.codeforces_username = req.body.codeforces_username || null;
  req.body.image = image || null;
  req.body.userType = req.body.userType || "member";

  next();
};

module.exports = { validateUserRequest };
