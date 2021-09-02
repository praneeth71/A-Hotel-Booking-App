
import user from "../models/user";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    // validation
    if(!name) return res.status(400).send('Name is required');
    if(!password || password.length < 6) return res.status(400).send('Password is required and should be min 6 characters long');
    let userExist = await user.findOne({email}).exec()
    if(userExist) return res.status(400).send('Email is taken')
    // register
    const user1 = new user(req.body);
    try {
        await user1.save();
        console.log("USER CREATED", user1);
        return res.json({ ok: true });

    } catch (err) {
        console.log('CREATE USER FAILED', err)
        return res.status(400).send('Error. Try again.')
    }
};

export const login = async (req, res) => {
    //console.log(req.data);
    const {email, password} = req.body;
    try {
        // check if user with that email exist
        let user2 = await user.findOne({ email }).exec();
        //console.log('USER EXIST', user2);
        if(!user2) res.status(400).send('User with that email not found');
        // compare password
        user2.comparePassword(password, (err, match) => {
            console.log("COMPARE PASSWORD IN LOGIN ERR", err);
            if(!match || err) return res.status(400).send("Wrong Password");
            // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
            let token = jwt.sign({_id: user2._id}, process.env.JWT_SECRET, {
                expiresIn: '7d'
            });
            res.json({ token, user2: {
                _id: user2._id,
                name: user2.name,
                email: user2.email,
                createdAt: user2.createdAt,
                updatedAt: user2.updatedAt
            } });
        })
    } catch (err) {
        console.log("LOGIN ERROR", err);
        res.status(400).send("Signin failed");
    }
};