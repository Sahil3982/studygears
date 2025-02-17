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


        res.status(200).json({
            status: 200,
            message: "Login Successfully",
            user: { id: user._id, name: user.name, email: user.email, role: user.role, }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default loginControllers;
