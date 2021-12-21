import {RequestHandler} from 'express'
import Video from './videos'

//crear video en base de datos
export const createVideo : RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    if (videoFound)
        return res.status(301).json({message: 'La URL ya existe'})


    const video = new Video(req.body)
    const savedVideo= await video.save()
    res.json(savedVideo);
}


//Buscar todos los Videos
export const getVideos : RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos);

    }catch (error) {
        res.json(error)
    }
    
}

//Buscra video por ID
export const getVideo : RequestHandler = async(req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
}


//Eliminar Videos de BD
export const deleteVideo : RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
}

//Actualizar un video por ID
export const updateVideo : RequestHandler = async(req, res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body,{new: true})

    if (!videoUpdate) return res.status(204).json();
    res.json(videoUpdate)
}