const fs = require('fs');

const atcUtil = (req, res, next) => {  

    try {
        const { site, pid, size } = req.query;
        if (!site || !pid || !size) {
            return res.status(400).json({ error: "Missing/Wrong parameters"})
        }
    
        const file = fs.readFileSync('./config.json');
        const config = JSON.parse(file);
    
        if (!config[site]) {
            return res.status(400).json({ error: "Site is not supported"})
        }
    
        const { atc_url, redirect_url } = config[site];
    
        return res.render('atc', {
            site: site,
            pid: pid,
            size: size,
            atc_url: atc_url,
            redirect_url: redirect_url
        })
    } catch (error) {
        error.status = 500;
        return next(error)
    }
    
   
}

module.exports = {
    atcUtil
}