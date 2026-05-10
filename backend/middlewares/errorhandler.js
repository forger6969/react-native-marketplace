const errorHandler = async (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.response?.data?.message || err.message || "Server Error",
  });
};

module.exports = errorHandler