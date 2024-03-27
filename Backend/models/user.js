const mongoose = require('mongoose')
const { post } = require('../routes/user')

const { ObjectId } = mongoose.Schema

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : [true, "first name is required"],
        trim : true,
        text : true
    },
    last_name : {
        type : String,
        required : [true, "last name is required"],
        trim : true,
        text : true
    },
    username : {
        type : String,
        required : [true, "username is required"],
        trim : true,
        text : true,
        unique : true
    },
    email : {
        type : String,
        required : [true, "email is required"],
        trim : true
    },
    password : {
        type : String,
        required : [true, "password is required"]
    },
    picture : {
        type : String,
        default : ""
    },
    cover : {
        type : String,
        trim : true
    },
    gender : {
        type : String,
        required : [true, "gender is required"]
    },
    byear : {
        type : Number,
        required : true,
        trim : true
    },
    bmonth : {
        type : Number,
        required : true,
        trim : true
    },
    bday : {
        type : Number,
        required : true,
        trim : true
    },
    verified : {
        type : Number,
        default : false
    },
    friends : {
        type : Array,
        default : []
    },
    follower : {
        type : Array,
        default : []
    },
    following : {
        type : Array,
        default : []
    },
    requests : {
        type : Array,
        default : []
    },
    search : [
        {
            user : {
                type : ObjectId,
                ref : 'User'
            }
        }
    ],
    details : {
        bio : {
            type : String
        },
        othername : {
            type : String
        },
        job : {
            type : String
        },
        workplace : {
            type : String
        },
        highschool : {
            type : String
        },
        college : {
            type : String
        },
        currentcity : {
            type : String
        },
        hometown : {
            type : String
        },
        relationship : {
            type : String,
            enum : ["single", "in a relationship", "married", "divorced"]
        },
        instagram : {
            type : String
        },
        savedposts : [
            {
                post : {
                    type : ObjectId,
                    ref : "Post"
                },
                savedat : {
                    type : Date,
                    default : new Date()
                }
            }
        ]
    }
}, {
    timestamps : true
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;