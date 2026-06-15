
const  { nanoid } = require("nanoid")
const URL = require("../models/url")


async function handleGenerateShortUrl(req,res){
    const shortId = nanoid(8);
    const body = req.body;

    if(!body.url) return res.status(400).json({err : 'url is required'});

   await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : []
    });

    return res.json({id: shortId});
}

async function handleRedirect(req,res) {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId: shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;

   const   result = await URL.findOne({shortId});

    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleRedirect,
    handleGetAnalytics

}