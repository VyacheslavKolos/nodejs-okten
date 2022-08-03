function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error('email or password is not provided!');
        }

        if (password.length < 6) {
            throw new Error('Pass < 6 symb!');
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports=isUserValid;
