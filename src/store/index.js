import { createStore, createLogger } from 'vuex'
import articles from './modules/evluation-service'

const debug = process.env.NODE_ENV !== 'production'

const store =  createStore({
  modules: {
    articles
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store