export default {
    namespaced: true,
    state: {
        bussesList: [
            { id: 1, licensePlate: 'AO2345OA', seats: 56 },
            { id: 2, licensePlate: 'AE1213AA', seats: 63 },
        ],
    },
    getters: {
        getBussesList: ({ bussesList }) => bussesList,
        getBusById: ({ bussesList }) => (busId) => bussesList.find((bus) => bus.id == busId),        
    },
    mutations: {
        addBusToBussesList(state, busObj) {
            state.bussesList.push({
                id: Date.now(),
                ...busObj,
            })
        },
        removeBusFromBussesList(state, busId) {
            state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
        },
        updateBusInbussesList(state, busObj) {
            const busIndex = state.bussesList.findIndex((bus) => bus.id === busObj.id)
            state.bussesList[busIndex] = busObj
        },
    },
    actions: {
        addBusToBussesList({ commit }, busObj) {
            commit('addBusToBussesList', busObj)
        },
        removeBusFromBussesList({ commit }, busId) {
            commit('removeBusFromBussesList', busId)
        },
        updateBusInbussesList({commit}, busObj) {
            commit('updateBusInbussesList', busObj)
        },
    },
    modules: {},
}
