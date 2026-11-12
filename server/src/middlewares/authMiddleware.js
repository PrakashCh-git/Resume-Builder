import jwt from 'jsonwebtoken'

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, no token provided"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed or expired"
        });
    }
}

export default protect;