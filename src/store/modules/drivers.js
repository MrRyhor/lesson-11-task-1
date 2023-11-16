import { isCorrespondToFilter } from '../../utils/helpers.js'
export default {
    namespaced: true,
    state: {
        driversList: [
            { id: 1, name: 'Ivan Draga', exp: 12 },
            { id: 2, name: 'Den Abrams', exp: 17 },
        ],
        filterObj: {},
    },
    getters: {
        getDriversList: ({ driversList }) => driversList,        
        getDriverById:
            ({ driversList }) =>
            (driverId) =>
                driversList.find((driver) => driver.id == driverId),
        getFilteredDriversList: ({ driversList, filterObj }) => driversList.filter((driver) => isCorrespondToFilter(driver, filterObj)),        
    },
    mutations: {
        addToDriversList(state, driverObj) {
            state.driversList.push({
                id: Date.now(),
                ...driverObj,
            })
        },
        removeFromDriversList(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
        },
        updateDriverInDriversList(state, driverObj) {
            const driverIndex = state.driversList.findIndex((driver) => driver.id === driverObj.id)
            state.driversList[driverIndex] = driverObj
        },
        setFilterObj(state, filterData) {
            state.filterObj = filterData
        },
    },
    actions: {
        addToDriversList({ commit }, driverObj) {
            commit('addToDriversList', driverObj)
        },
        removeFromDriversList({ commit }, driverId) {
            commit('removeFromDriversList', driverId)
        },
        updateDriverInDriversList({ commit }, driverObj) {
            commit('updateDriverInDriversList', driverObj)
        },
        setFilterObj({ commit }, filterData) {
            commit('setFilterObj', filterData)
        },
    },
    modules: {},
}
