const wingMiddleware = async (req, res, next) => {
    try {
        if(!req.body.name||!req.body.description) {
            return res.status(400).json({
                message: 'Please fill all the Wing details',
                status: false
            });
        }
        next();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    wingMiddleware
}