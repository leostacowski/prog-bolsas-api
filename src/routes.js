import { Router } from 'express'
import { getHTMLFromReadme } from './utils'

const router = Router()
const SUPPORTED_VERBS = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']

const getErrorResponse = ({ httpVerb, message }) => ({
  httpVerb,
  success: false,
  performedAt: `${new Date()}`,
  message,
})

const getSuccessResponse = ({ httpVerb, data }) => ({
  httpVerb,
  success: true,
  performedAt: `${new Date()}`,
  data,
})

router.use((req, res, next) => {
  const httpVerb = req?.method

  console.log(`${httpVerb}: ${new Date()}`)

  if (!SUPPORTED_VERBS.includes(httpVerb)) {
    return res.status(400).json(
      getErrorResponse({
        httpVerb,
        message: 'HTTP verb not supported!',
      }),
    )
  }

  return next()
})

router.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(await getHTMLFromReadme()))
})

router.post('/', (req, res) => {
  const httpVerb = req?.method

  if (!req?.body || !Object.keys(req.body).length)
    return res.status(400).json(
      getErrorResponse({
        httpVerb,
        message: 'Invalid request body!',
      }),
    )

  return res.json(getSuccessResponse({ httpVerb, data: req?.body }))
})

router.patch('/', (req, res) => {
  const httpVerb = req?.method

  if (!req?.body || !Object.keys(req.body).length)
    return res.status(400).json(
      getErrorResponse({
        httpVerb,
        message: 'Invalid request body!',
      }),
    )

  return res.json(getSuccessResponse({ httpVerb, data: req?.body }))
})

router.put('/', (req, res) => {
  const httpVerb = req?.method

  if (!req?.body || !Object.keys(req.body).length)
    return res.status(400).json(
      getErrorResponse({
        httpVerb,
        message: 'Invalid request body!',
      }),
    )

  return res.json(getSuccessResponse({ httpVerb, data: req?.body }))
})

router.delete('/', (req, res) => {
  const httpVerb = req?.method

  if (!req?.body || !Object.keys(req.body).length)
    return res.status(400).json(
      getErrorResponse({
        httpVerb,
        message: 'Invalid request body!',
      }),
    )

  return res.json(getSuccessResponse({ httpVerb, data: req?.body }))
})

router.use((req, res, next) =>
  res.status(404).json(
    getErrorResponse({
      httpVerb: req?.method,
      message: 'Route not found!',
    }),
  ),
)

router.use((err, req, res, next) => {
  console.error(err.stack)

  return res.status(500).json(
    getErrorResponse({
      httpVerb: req?.method,
      message: 'Internal error!',
    }),
  )
})

export default router
