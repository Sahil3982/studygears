import registerModels from "../models/registerModels.js";

const loginControllers = async (req, res) => {
    const { email, password } = req.body; 

    try {
        const user = await registerModels.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {  
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login Successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default loginControllers;
