import { createStore } from 'vuex'
import car from './module/car'
import user from './module/user'

const store = createStore({
    modules: {
        car,
        user,
    },
})
export default store
