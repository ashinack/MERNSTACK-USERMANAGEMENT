const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    // pic:{
    //     type:String,
    //     required:true,
    // }
    },
    {
        timestamps:true
    })
    userschema.pre("save",async function(next){
        if(!this.isModified("password")){
            next();
        }
        const salt=await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
        
    });
    userschema.methods.matchPassword=async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    };

    const User=mongoose.model('User',userschema)
    module.exports=User;

