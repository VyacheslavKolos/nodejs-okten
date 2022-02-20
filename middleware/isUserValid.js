function isUserValid(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;
        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('something is not provided!')
        }
        next();
    } catch (e) {
        res.status(400).send(e.message);
    }
}
module.exports=isUserValid;