<template>
    <div v-if="getFleetWehicalsListlistToView.length">
        <div v-for="res in getFleetWehicalsListlistToView" :key="res.id" class="res-container">
            <div>{{ res.driver.name }} -- {{ res.bus.licensePlate }}</div>
            <button type="delete" @click="removeFromFleetWehicalsList(res.id)">Delete</button>
        </div>
    </div>
    <div v-else>No Results</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'FleetWehicalsList',

    data() {
        return {
            resultList: [],
        }
    },

    computed: {
        ...mapGetters('fleetWehical', ['getFleetWehicalsListlistToView']),
    },

    methods: {
        ...mapActions('fleetWehical', ['removeFromFleetWehicalsList']),
    },
}
</script>
<style lang="scss" scoped>
.res-container {
    display: flex;
    align-items: center;
    gap: 10px;

    &>button {
        cursor: pointer;
    }

    &>button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }
}
</style>
