import { serve } from 'bun'
import { init as serverInit } from './server'

const instance = serverInit()

const served = serve({
  port: 3000,
  fetch: instance.fetch,
})

console.log(`Server is running at http://${served.hostname}:${served.port}`)
