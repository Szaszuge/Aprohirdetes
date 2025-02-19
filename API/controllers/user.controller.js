const userService = require('../services/user.service');

exports.register = async (req, res, next) => {
   try{
    const { name, email, password, confirm} = req.body;
    if(!name || !email || !password ||!confirm){
        return res.status(400).json({success: false, message: 'Hiányzó adatok!'});
    }

    if(password != confirm){
        return res.status(400).json({success: false, message: 'Nem egyeznek a megadott jelszavak!'});
    }


    const user = await userService.registerUser(name, email, password);
    res.status(201).json({success: true, user: user});
   }
    catch(err){
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message: 'Hiányzó adatok!'});
        }
        const user = await userService.loginUser(email, password);
      
        res.status(200).json({success: true, user: user, token: user.token});
       
    }
    catch(err){
        next(err);
    }
    
}

exports.getAllUsers = async (_req, res, next) => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json({success: true, users: users});
    }
    catch(err){
        next(err);
    }
}