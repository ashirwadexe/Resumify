import bcrypt from 'bcrypt';
import User from "../Models/User.Model.js"
import jwt from 'jsonwebtoken';
import Resume from '../models/resume.model.js';

const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
    return token;
};

//logic for Registration
//POST: /api/users/register
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if rerquired fields are present
        if(!name || !email || !password) {
            return res.status(400).json({
                message: 'Something is missing!',
                success: false
            });
        };

        // check is user already exist
        const user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({
                message: 'User already exists, try another email to register😁',
                success: false
            });
        };
        
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // generate token
        const token = generateToken(newUser._id);

        // return success message
        newUser.password = undefined;

        return res.status(201).json({
            message: "User Created Successfully",
            token,
            user: newUser,
        });
    } catch (error) {
        console.log("Registration Error: ",error)
        return res.status(400).json({
            message: error.message,
        });
    };
};

//logic for LOGIN
//POST: /api/users/login
export const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if rerquired fields are present
        if(!email || !password) {
            return res.status(400).json({
                message: 'Incorrect email or password!',
                success: false
            });
        };

        // check if user exists
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                message: 'User does not exists!',
                success: false
            });
        };

        //check if passowrd is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({
                message: "Incorrect password!",
                success: false
            });
        };

        const token = generateToken(user._id);
        user.password = undefined;

        return res.status(200).json({
            message: "Login successful!",
            token,
            user,
        });
    } catch (error) {
        console.log("Login Error: ", error)
        return res.status(400).json({
            message: error.message,
        });
    };
};

//logic to get user by id
//GET: /api/users/data

export const getUserById = async (req, res) => {
    try {
        // this userId - added by isAUthenticated middleware
        const userId = req.userId;

        // check if user exist
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        };

        // return user
        user.password = undefined;
        return res.status(200).json({
            user
        });

    } catch (error) {
        console.log("Get User by Id error: ", error);
        return res.status(400).json({
            message: error.message,
        });
    };
};

// logout logic
//USER LOGOUT LOGIC
export const logout = async (req, res) => {
    try {
        return res.status(201).cookie("token", "", {maxAge: 0}).json({
            message: "Logged out Successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
    };
};


//logic to get user resumes
//GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
    try {
        const userId = req.userId;

        // return user resumes
        const resumes = await Resume.find({userId});
        return res.status(200).json({resumes});
        
    } catch (error) {
        console.log("getUserResume ERROR: ", error);
        return res.status(400).json({
            message: error.message,
            success: false
        });
    };
}