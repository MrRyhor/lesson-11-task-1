<template>
    <div class="driver-item-container">
        <div>
            {{ driverObj.name }}
        </div>
        <div>
            {{ driverObj.exp }}
        </div>
        <div class="driver-btns-container">
            <button type="button" @click="onEdit">Edit</button>
            <button type="button" @click="removeFromDriversList(driverObj.id)">Delete</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'DriverItem',

    props: {
        driverObj: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapActions('drivers',['removeFromDriversList']),
        onEdit() {
            return this.$router.push({
                name: 'driversEditor',
                params: {
                    driverId: this.driverObj.id,
                },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.driver-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;

    & .driver-btns-container {
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
