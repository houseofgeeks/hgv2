const assignmentMiddleware = async (req, res, next) => {
    try {
        if (!req.body.projectURL) {
            return res.status(400).json({
                message: "Please fill all the fields",
                status: false,
            });
        }
        next();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    assignmentMiddleware,
};