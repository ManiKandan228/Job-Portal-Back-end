const initialData = require('../data/initialData')
const jobModel=require('../models/jobModel')

const getAllDetails = async(request, response) =>
{
    try
    {
        const details = await jobModel.find()
        if(details.length === 0)
        {
            const initialDetails = await jobModel.insertMany(initialData)
            return response.status(200).json(initialDetails)
        }
        else
        {
            return response.status(200).json(details)
        }
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const addDetails = async(request, response) => {
    const detailsToBeAdded = request.body

    try
    {
        const existingDetails = await jobModel.findOne({Id : detailsToBeAdded.Id})
        if(existingDetails)
        {
            return response.status(409).send({message: `A Job with Id ${detailsToBeAdded.Id} already exists`})
        }
        const insertedDetails = await jobModel.create(detailsToBeAdded)
        response.status(201).json(insertedDetails)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const updateDetails = async(request, response) => {
    const detailsToBeUpdate = request.body

    try
    {
        const updatedDetails = await jobModel.updateMany({Id : detailsToBeUpdate.Id}, detailsToBeUpdate)
        response.status(200).json(updateDetails)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const deleteDetails = async(request, response) => {
    const detailsToBeDeleted = request.body

    try
    {
        const deletedDetails = await jobModel.deleteOne({Id : detailsToBeDeleted.Id})
        response.status(200).json(deleteDetails)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {getAllDetails, addDetails, updateDetails, deleteDetails}