import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({messege: 'Hello world'})

})

export default routes;