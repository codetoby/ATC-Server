function errorHander(error, req, res, next) {
    return res.json(error.status).json({ error: error.message })
}

module.exports = errorHander