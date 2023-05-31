const authController = require('../Services/authService');

exports.getUser = async (req, res) => {
    const user = await authController.getUser(req.params.userId)
    try{
        res.status(201).json({ status: 201, user})
    } catch(err){
        res.status(404).json({ status: 404, message: err.message})
    }
}

