import { Request, Response, NextFunction } from "express";

const validateUserRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password } = req.body;
  const { image } = (req.file as any) || {};

  if (!name || !email || !password) {
    return res.status(400).json({
      data: {},
      message: "Bad request",
      success: false,
      err: {},
    });
  }

  function useRegex(input: string) {
    const regex = /@iiitranchi\./;
    return regex.test(input);
  }

  if (!useRegex(email)) {
    return res.status(400).json({
      data: {},
      message: "Please use a valid college email address",
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

export { validateUserRequest };
