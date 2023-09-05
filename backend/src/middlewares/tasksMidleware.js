const validateTitle = (req, res, next) => {
    const {body} = req;

    if (body.title === ""){
        return res.status(400).json({mesasge: "The field 'title' cannot be empty"});
    }
    if (body.title === undefined){
        return res.status(400).json({message: "The field 'title' is required"})
    }
    next();
}

const validateStatus = (req, res, next) => {
    const {body} = req;
    if (body.status === ""){
        return res.status(400).json({message: "The field 'status' cannot be empty"})
    }
    if (body.status === undefined){
        return res.status(400).json({message: "The field 'status' is required"})
    }
    if (body.status != "pending" && body.status != "concluded"){
        return res.status(400).json({message: "The field 'status' only accepts 'pending' or 'concluded'"})
    }
    next();
}

module.exports = {
    validateTitle,
    validateStatus
}