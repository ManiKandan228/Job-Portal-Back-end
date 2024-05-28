const jobModel=require('../models/jobModel')
const validateId = async(request, response) => {
    const givenId = request.body.Id

    try
    {
        const validId = await jobModel.findOne({Id : givenId})
        if(validId)
        {
            return response.status(200).json(validId)
        }
        return response.status(400).send({message: `Invalid Id Number!!`})
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {validateId}