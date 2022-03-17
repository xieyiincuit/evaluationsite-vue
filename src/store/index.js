import { createStore, createLogger } from 'vuex'
import articles from './modules/evaluation'
import identity from './modules/identity'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    articles,
    identity
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store