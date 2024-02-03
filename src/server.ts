import { Hono } from 'hono'

export const init = () => {
  const app = new Hono()

  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })

  return app
}
