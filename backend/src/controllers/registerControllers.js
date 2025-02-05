import registerModels from "../models/registerModels.js";

const getRegisterData = async (req, res) => {
    try {
        const { name, email, passward, username } = req.body;

        // Check if the user already exists
        const existingUser = await registerModels.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already registered",
            });
        }

        // Create a new user
        const newUser = new registerModels({
            name,
            email,
            passward,
            username
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: savedUser
        });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export default getRegisterData;
