class CreateCourseRequest {
    validation(req, res, next) {
        console.log(req);
        const { name, content } = req.body;
        if(!name) {
            res.status(400).json({
                message: "name is required"
            });
        } else if(!content) {
            res.status(400).json({
                message: "content is required"
            });
        }

        return next();
    }
}

module.exports = {
    CreateCourseRequest
}