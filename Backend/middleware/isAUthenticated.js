import jwt from 'jsonwebtoken';

const isAUthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(401).json({
                message: 'Unauthorized User',
                success: false
            });
        };

        // decode token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        req.userId = decode.userId;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Unauthorized",
            success:false
        });
    };
}

export default isAUthenticated;