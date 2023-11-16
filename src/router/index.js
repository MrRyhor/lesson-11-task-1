import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import DriversView from '../views/DriversView'
import BussesView from '../views/BussesView'
import FleetVehicalsEditor from '../components/FleetVehicalsEditor.vue'
import FleetWehicalsView from '../views/FleetWehicalsView'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesView,
    },
    {
        path: '/fleet',
        name: 'fleet',
        component: FleetWehicalsView,
    },
    {
        path: '/drivers/create/:driverId?',
        name: 'driversEditor',
        component: FleetVehicalsEditor,
    },
    {
        path: '/busses/create/:busId?',
        name: 'bussesEditor',
        component: FleetVehicalsEditor,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
