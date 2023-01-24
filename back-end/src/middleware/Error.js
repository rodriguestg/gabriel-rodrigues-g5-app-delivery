  const ErrorHandler = (error, req, res, next) => {
    res.status(500).json({ message: error.message });
    next();
  };

export default ErrorHandler;