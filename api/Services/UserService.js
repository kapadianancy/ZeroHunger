const user = require('../models/User');
const role = require("../models/Role");
const util = require('./utils');

const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');

exports.addUser = async (req, res) => {
    try {
        const u = new user(req.body);
        var token = await util.generateToken(u);
        u.password = await gethash(req.body.password);
        if (!token) {
            return res.status(400).send("bad request");
        }
        var result = await u.save();
        if (!result) {
            return res.status(400).send("bad request");
        }
        return res.status(201).send({ "user": u, "token": token });

    } catch (err) {
        res.status(400).send(err);
    }
}

exports.addRole = async (req, res) => {
    try {
        const r = new role(req.body);

        var result = await r.save();
       
        if (!result) {
            return res.status(400).send("bad request");
        }
        return res.status(201).send("registered " + r);

    } catch (err) {
        res.status(400).send(err);
    }
}

exports.edit = async (req, res) => {
    try {
        await user.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true}, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("user Updated")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Updated")
    }
}


exports.login = async (req, res) => {
    try {
        const u = await user.find({
            username: req.body.username,
            is_deleted: 0
        })
        if (u.length == 0) {
            return res.status(401).send("Invalid Username");
        }
        let valid = await bcrypt.compare(req.body.password, u[0].password);
        if (!valid) {
            return res.status(401).send("Invalid Password");
        }
        const token = await util.generateToken(u[0]);
        res.status(200).send({ "user": u[0], "token": token });
    }
    catch (e) {
        res.status(400).send(e);
    }

}



exports.changePassword = async (req, res) => {
    try {
        let validpass = await bcrypt.compare(req.body.oldpass, req.validUser.password)

        if (!validpass) {
            return res.status(401).send("Not Valid Old Password");
        }

        const password = await gethash(req.body.newpass);

        const User = await user.findByIdAndUpdate(req.validUser._id, {
            password: password
        },{new:true,runValidators:true})

        if (User) {
            return res.status(201).send("Successfully Password Changed");
        }
        else {
            return res.status(400).send("Not Updated");
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.forgetPassword = async (req, res) => {
    try {
        const email=req.body.email;
        const u = await user.find({
            email: req.body.email,
            is_deleted: 0
        })

        if (u.length == 0) {
            return res.status(401).send("User Not Found");
        }

        const result = await sendMail(email);
        if (result) {
            return res.status(200).send("Check Your Mail For New Password");
        }
        else {
            return res.status(400).send(result);
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.updatePassword = async (req, res) => {
    try {
        const password = await gethash(req.body.newpass);
    
        const User = await user.findByIdAndUpdate(req.params.id, {
            password: password
        },{new:true,runValidators:true})

        if (User) {
            return res.status(201).send("Successfully Password Changed");
        }
        else {
            return res.status(400).send("Not Updated");
        }

    }
    catch (error) {
        res.status(400).send(error);
    }
}

const sendMail = async function (email) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nidhinancy0921@gmail.com',
            pass: 'nidhi0921nancy'
        }
    });


    const u = await user.find({
        email: email,
        is_deleted: 0
    })

    const path = 'http://localhost:8000/updatePassword/' + u[0]._id
    let msg = '<html><body><a href=' + path + '>Click Here To Set Your New Password</a></body></htm>'

    var mailOptions = {
        from: 'nidhinancy0921@gmail.com',
        to: email,
        subject: 'Forget Password From ZeroHunger',
        text: 'Set Your New Password',
        html: msg
    };

    let sendmail = await transporter.sendMail(mailOptions);

    return sendmail;


}

const gethash = async function (password) {
    const h = await bcrypt.hash(password, 8);
    return h;
}
