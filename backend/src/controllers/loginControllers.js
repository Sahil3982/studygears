import registerModels from "../models/registerModels.js";

const getLogin = async (req, res) => {
    const { email, passward } = req.body

    try {
        const islogin = await registerModels.find({ email: email, passward: passward })

        if (islogin) {
            res.status(200).json({
                message: "Login Successfully"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : "Went wrong"
        })

    }

}

export default getLogin 