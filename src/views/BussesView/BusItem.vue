<template>
    <div class="bus-item-container">
        <div>{{ busObj.licensePlate }}</div>
        <div>{{ busObj.seats }}</div>
        <div class="bus-btns-container">
            <button type="button" @click="onEdit">Edit</button>
            <button type="button" @click="removeBusFromBussesList(busObj.id)">Delete</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'BusItem',

    props: {
        busObj: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapActions('busses',['removeBusFromBussesList']),
        onEdit() {
            return this.$router.push({
                name: 'bussesEditor',
                params: {
                    busId: this.busObj.id,
                },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.bus-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;

    & .bus-btns-container {
        display: flex;
        align-items: center;
        gap: 10px;

        & > button {
            cursor: pointer;
        }
        & > button:hover {
            background-color: rgb(57, 57, 57);
            color: #fff;
        }
    }
}
</style>
