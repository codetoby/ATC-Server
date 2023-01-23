const fs = require('fs');

const atcUtil = (req, res) => {  
    
    if (!req.query.site || !req.query.pid || !req.query.size) {
        res.send("Error: Missing parameters");
        return;
    }

    const site = req.query.site;
    const pid = req.query.pid;
    const size = req.query.size;

    const file = fs.readFileSync('./config.json');
    const config = JSON.parse(file);
    if (!config[site]) {
        res.send("Error: Site not supported");
        return
    }

    let atc_url = config[site].atc_url;
    let redirect_url = config[site].redirect_url;

    return res.render('atc', {
        site: site,
        pid: pid,
        size: size,
        atc_url: atc_url,
        redirect_url: redirect_url
    })
}

module.exports = {
    atcUtil
}