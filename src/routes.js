import { Router } from 'express'
import doc from './doc'

const router = Router()
const SUPPORTED_VERBS = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']

router.use((req, res, next) => {
  console.log(`${req?.method}: ${req.url}`)

  if (!SUPPORTED_VERBS.includes(req?.method)) {
    return res.status(400).json({
      httpVerb: req?.method,
      success: false,
      performedAt: `${new Date()}`,
      message: 'HTTP verb not supported!',
    })
  }

  return next()
})

router.get('/', (req, res) => {
  return res.json(doc)
})

router.post('/', (req, res) => {
  let response = {
    httpVerb: 'POST',
    success: false,
    performedAt: `${new Date()}`,
  }

  if (!req?.body || !Object.keys(req.body).length) {
    response.message = 'Invalid request body!'
    return res.status(400).json(response)
  }

  response.success = true
  response.data = req?.body

  return res.json(response)
})

router.patch('/', (req, res) => {
  let response = {
    httpVerb: 'PATCH',
    success: false,
    performedAt: `${new Date()}`,
  }

  if (!req?.body || !Object.keys(req.body).length) {
    response.message = 'Invalid request body!'
    return res.status(400).json(response)
  }

  response.success = true
  response.data = req?.body

  return res.json(response)
})

router.put('/', (req, res) => {
  let response = {
    httpVerb: 'PUT',
    success: false,
    performedAt: `${new Date()}`,
  }

  if (!req?.body || !Object.keys(req.body).length) {
    response.message = 'Invalid request body!'
    return res.status(400).json(response)
  }

  response.success = true
  response.data = req?.body

  return res.json(response)
})

router.delete('/', (req, res) => {
  let response = {
    httpVerb: 'DELETE',
    success: false,
    performedAt: `${new Date()}`,
  }

  if (!req?.body || !Object.keys(req.body).length) {
    response.message = 'Invalid request body!'
    return res.status(400).json(response)
  }

  response.success = true
  response.data = req?.body

  return res.json(response)
})

router.use((req, res, next) => {
  return res.status(404).json({
    httpVerb: req?.method,
    success: false,
    performedAt: `${new Date()}`,
    message: 'Route not found!',
  })
})

router.use((err, req, res, next) => {
  console.error(err.stack)

  return res.status(500).json({
    httpVerb: req?.method,
    success: false,
    performedAt: `${new Date()}`,
    message: 'Internal error!',
  })
})

export default router
