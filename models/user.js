import { Schema, model } from "mongoose";

const UserSchema = Schema({
// modelo de nuestro escquema
    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    nick:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "role_user"
    },
    image:{
        type: String,
        default: "dafault.png"
    },
    create_at:{
        type: Date,
        default: Date.now
    }

});

export default model("User",UserSchema,"users");