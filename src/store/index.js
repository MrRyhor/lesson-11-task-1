import { createStore } from 'vuex'
import drivers from './modules/drivers'
import busses from './modules/busses'
import fleetWehical from './modules/fleetWehical'

export default createStore({
    modules: {
        drivers,
        busses,
        fleetWehical,
    },
})
