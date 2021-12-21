import {Router} from 'express'
const router = Router();

import * as videoControl from './video.controller'

router.get('/videos', videoControl.getVideos);

router.get('/videos/:id', videoControl.getVideo);

router.post('/videos', videoControl.createVideo);

router.delete('/videos/:id', videoControl.deleteVideo);

router.put('/videos/:id', videoControl.updateVideo);

export default router