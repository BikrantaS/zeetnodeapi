const authorize = (req, res, next) => {

    const { user } = req.query
    if (user === 'rick') {
        req.user = { name: 'rick', id: 3 }
        console.log("Query:", req.query)
        next();
    } else {
        res.status(401).send('Unauthorised Access')
    }

}

module.exports = authorize;