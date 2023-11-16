export default {
    namespaced: true,
    state: {
        fleetWehicalsList: [],
    },
    getters: {
        getFleetWehicalsList: ({ fleetWehicalsList }) => fleetWehicalsList,
        getFleetWehicalsListlistToView: (state, getters, rootState, rootGetters) => {
            return state.fleetWehicalsList.map(
                (fleetObj) =>
                    (fleetObj = {
                        id: fleetObj.id,
                        driver: rootGetters['drivers/getDriverById'](fleetObj.driver),
                        bus: rootGetters['busses/getBusById'](fleetObj.bus),
                    })
            )
        },
    },
    mutations: {
        addToFleetWehicalsList(state, fleetObj) {
            state.fleetWehicalsList.push({ id: Date.now(), ...fleetObj })
        },
        removeFromFleetWehicalsList(state, id) {
            state.fleetWehicalsList = state.fleetWehicalsList.filter((fleetObj) => fleetObj.id !== id)
        },
    },
    actions: {
        addToFleetWehicalsList({ commit }, fleetObj) {
            commit('addToFleetWehicalsList', fleetObj)
        },
        removeFromFleetWehicalsList({ commit }, id) {
            commit('removeFromFleetWehicalsList', id)
        },
    },
    modules: {},
}
