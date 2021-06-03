const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    const { info } = req.params;
    console.log("logged info:", method, url, time, info)
    next();
}

module.exports = logger;