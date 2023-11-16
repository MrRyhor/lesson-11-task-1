<template>
    <div v-if = "getBussesList.length" class="busses-list-container">
        <h1>Busses List:</h1>
        <div class = "busses-titles">
            <h3>License plates</h3>
            <h3>Seats</h3>
        </div>
        <bus-item v-for="bus in getBussesList" :key="bus.id" :bus-obj="bus" />
        <button type="button" @click = "onCreateBus">Create Bus</button>
    </div>
    <div v-else class="no-result">No Results</div>
</template>
<script>
import BusItem from './BusItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'BussesList',
    components: { BusItem },

    computed: {
        ...mapGetters('busses',['getBussesList']),
    },
    methods: {
        onCreateBus(){
            return this.$router.push({
                name: 'bussesEditor'
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.busses-list-container {
    max-width: 500px;

    & > button {
        margin-top: 20px;
        cursor: pointer;
    }
    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }

    & .busses-titles{
        display: flex;
        align-items: center;
        gap: 90px;
    }
}
.no-result{
    text-transform: uppercase;
    margin-top: 50px;
    padding-left: 100px;
}
</style>
