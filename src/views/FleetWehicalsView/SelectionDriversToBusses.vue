<template>
    <div class="selection-container">
        <h1>Selection panel:</h1>
        <div class="drivers-selection">
            Drivers list:
            <select v-model = "selectionObj.driver">
                <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">{{ driver.name }}</option>
            </select>            
        </div>
        <div class="busses-selection">
            Busses list:
            <select v-model = "selectionObj.bus">
                <option v-for="bus in getBussesList" :key="bus.id" :value="bus.id">{{ bus.licensePlate }}</option>
            </select>            
        </div>
        <button type="button" @click ="onAddToFleet">Add to fleet</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'SelectionDriversToBusses',
    data() {
        return {            
            selectionObj: {}
        }
    },

    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('busses', ['getBussesList']),
    },

    methods: {
        ...mapActions('fleetWehical', ['addToFleetWehicalsList']),
        onAddToFleet(){
            this.addToFleetWehicalsList(this.selectionObj)
            this.selectionObj = {}
        }
    },
}
</script>
<style lang="scss" scoped>
.selection-container {
    & .drivers-selection {
        margin-top: 10px;
    }

    & .busses-selection {
        margin-top: 10px;
    }

    & > button {
        cursor: pointer;
        margin-top: 20px;
    }

    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }
}
</style>
