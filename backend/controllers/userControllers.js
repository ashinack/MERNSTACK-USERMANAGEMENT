
// // const { findByIdAndUpdate } = require('../models/UserSchema');
// const User = require('../models/UserSchema')
// const generarteToken = require('../utils/generateToken')
// const asyncHandler = require('express-async-handler');

// const regiesterUser = asyncHandler(async (req, res) => {
//     const { name, email, password, pic } = req.body;
//     const userExist = await User.findOne({ email });
//     if (userExist) {
//         res.status(400)
//         throw new Error('user already Exist')
//     }
//     const user = await User.create({
//         name,
//         email,
//         password,
//         pic,
//     })
//     if (user) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             password: user.password,
//             isAdmin: user.isAdmin,
//             pic: user.pic,
//             token: generarteToken(user._id),

//         })
//     } else {
//         res.status(400)
//         throw new Error('ERROR OCCURED')
//     }

// })


// const authUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             pic: user.pic,
//             token: generarteToken(user._id)

//         });
//     } else {
//         res.status(401);
//         throw new Error("Invalid Email or Password");
//     }
// });

// const getUser = async (req, res) => {
//     const user = await User.find()
//     res.json(user)
// }

// const getUserEdit = async (req, res) => {
//     const { id } = req.params
//     const userEdit = await User.findById(id)
//     console.log(userEdit)
//     res.json(userEdit)

// }

// const getUserDelete = async (req, res) => {
//     const { id } = req.params
//     const userDelete = await User.findByIdAndDelete(id)

//     res.json(userDelete)

// }


// const postUserEdit = async (req, res) => {
//     const { id } = req.params
//     const userEditng = await User.findByIdAndUpdate(id, req.body)
//     res.json(userEditng)
//     console.log(userEditng)
// }
// module.exports = { postUserEdit, getUserEdit, getUserDelete, authUser, regiesterUser, getUser }

const asyncHandler = require('express-async-handler')
const User = require('../models/UserSchema')

const generateToken = require('../utils/generateToken')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })
    
    if (userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    const user = await User.create({
        name,
        email,
        password,
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.send(400)
        throw new Error('error occured')
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400)
        throw new Error("Invalid username or password")
    }
})

const userData=asyncHandler(async(req,res)=>{
    const userInfo=await User.find({})
   
        res.json(userInfo)
    
})

const editUser=asyncHandler(async(req,res)=>{
    let id=req.params.id
    const editUserdata=await User.findById({_id:id})
    res.json(editUserdata)
})

const userEdit=asyncHandler(async(req,res)=>{
     const { name, email } = req.body
    let id=req.params.id
    const editUser=await User.updateOne({_id:id},{
        $set:{
            name,
            email
        }
    })
    res.json(editUser)
})

const removeUserData = asyncHandler(async (req, res) => {
    let id=req.params.id
    const deleteuser = await User.deleteOne({_id:id})

    res.json(deleteuser)

})

module.exports = { registerUser, authUser, userData, removeUserData, editUser, userEdit }