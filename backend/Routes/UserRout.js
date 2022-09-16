const express=require('express')
const { registerUser, authUser, userData, removeUserData, editUser, userEdit }=require('../controllers/userControllers')

const router=express.Router()


router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/user').get(userData)
router.route('/userDelete/:id').delete(removeUserData)
router.route('/edituser/:id').get(editUser)
router.route('/postedit/:id').put(userEdit)






module.exports=router; 

// const express = require("express");


// const router = express.Router();
// const { registerUser, authUser, getUser, getUserbyId, editUserbyId, deleteUser } = require("../controllers/userControllers");

// router.route('/').post(registerUser);
// router.route('/login').post(authUser);
// // router.route('/getuser').get(getUser);
// router.route('/getuser/:id').get(getUserbyId);
// router.route('/getuser/edit/:id').post(editUserbyId);
// router.route('/deleteUser/:id').post(deleteUser);

// // router.get('/',(req,res)=>{
// //     res.send("hello")
// // })




// module.exports = router;