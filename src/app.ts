import express  from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

import videoRoutes from './routes/videos.routes'

//se asigna express a la variabel app
const app = express()

//de express set el puerto
app.set('port', config.PORT);

//Codigos Respuestas servidor 
app.use(morgan('dev'));

app.use(cors());

//para que entienda los datos json
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//que el servidor express utilice modulo videoRutes
app.use(videoRoutes)

export default app;