<template>
    <div v-if = "getFilteredDriversList.length" class="drivers-list-container">
        <h1>Drivers List:</h1>
        <div class="drivers-titles">
            <h3>Names</h3>
            <h3>Expirience</h3>
        </div>
        <driver-item v-for="driver in getFilteredDriversList" :key="driver.id" :driver-obj="driver" />
        <button type="button" @click="onCreateDriver">Create Driver</button>
    </div>
    <div v-else class="no-result">No Results</div>
</template>
<script>
import DriverItem from './DriverItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'DriversList',

    components: { DriverItem },

    computed: {
        ...mapGetters('drivers',['getFilteredDriversList']),
    },
    methods: {
        onCreateDriver() {            
            return this.$router.push({
                name: 'driversEditor',
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.drivers-list-container {
    max-width: 500px;

    & > button {
        margin-top: 20px;
        cursor: pointer;
    }
    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }

    & .drivers-titles {
        display: flex;
        align-items: center;
        gap: 140px;
    }
}
.no-result {
    text-transform: uppercase;
    margin-top: 50px;
    padding-left: 100px;
}
</style>
