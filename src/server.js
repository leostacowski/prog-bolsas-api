import express from 'express'
import cors from 'cors'
import routes from './routes'

let app = null

const setup = () => {
  app = express()
  app.use(cors())
  app.use(express.json())
  app.use(routes)
}

const serve = () => {
  const port = process.env.PORT || 80

  app.listen(port, () =>
    console.log(`Express server listening on port ${port}`),
  )
}

export const run = () => {
  setup()
  serve()
}
