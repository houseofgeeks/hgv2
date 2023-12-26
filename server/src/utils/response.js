const success = (res, data, message, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const error = (res, err, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message: err.message,
    error: { err },
  });
};

module.exports = {
  success,
  error,
};
