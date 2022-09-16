const asyncHandler = require('express-async-handler')

const Admin = require('../models/adminSchema')

const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    const admin = await Admin.findOne({ email })
    
     
        if (admin &&(await password == admin.password)) {
            res.json({
                _id: admin._id,
                email: admin.email,
            })
        }
        else {
            res.status(400)
            throw new Error("Invalid username or password")
        }
      
})

module.exports = { authAdmin }