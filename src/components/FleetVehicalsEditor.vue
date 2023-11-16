<template>
    <div class="editor-container">
        <label
            >{{ labelFirst }}
            <input v-if="isCorrespondURL" v-model="driverData.name" type="text" />
            <input v-else v-model="busData.licensePlate" type="text" />
        </label>
        <label
            >{{ labelSecond }}
            <input v-if="isCorrespondURL" v-model="driverData.exp" type="number" />
            <input v-else v-model="busData.seats" type="text" />
        </label>
        <button type="button" @click="onBtnClick">{{ btnText }}</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'FleetVehicalsEditor',

    data() {
        return {
            driverData: {},
            busData: {},
        }
    },

    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        ...mapGetters('busses', ['getBusById']),
        isCorrespondURL() {
            if (this.isCorrectURLPath || this.$route.params.driverId) return true
            return false
        },
        isCorrespondParams() {
            if (this.$route.params.driverId || this.$route.params.busId) return true
            return false
        },
        isCorrectURLPath() {
            return this.$route.path === '/drivers/create'
        },
        labelFirst() {
            return this.isCorrespondURL ? 'Name:' : 'License plates:'
        },
        labelSecond() {
            return this.isCorrespondURL ? 'Expirience:' : 'Seats:'
        },
        btnText() {
            return !this.isCorrespondParams ? 'Create' : 'Save'
        },
    },

    created() {
        if (this.isCorrespondParams) {
            this.driverData = { ...this.getDriverById(this.$route.params.driverId) }
            this.busData = { ...this.getBusById(this.$route.params.busId) }
        }
    },

    methods: {
        ...mapActions('drivers', ['addToDriversList', 'updateDriverInDriversList']),
        ...mapActions('busses', ['addBusToBussesList', 'updateBusInbussesList']),
        onBtnClick() {
            if (this.isCorrectURLPath) this.addToDriversList(this.driverData)
            else if (this.isCorrespondParams) {
                this.updateDriverInDriversList(this.driverData)
                this.updateBusInbussesList(this.busData)
            } else this.addBusToBussesList(this.busData)

            if (this.$route.params.driverId || this.isCorrectURLPath) {
                this.$router.push({
                    name: 'drivers',
                })
            } else {
                this.$router.push({
                    name: 'busses',
                })
            }
        },
    },
}
</script>
<style lang="scss" scoped>
    .editor-container{
        &>button{
            cursor: pointer;
        }
         &>button:hover{
            background-color: rgb(57, 57, 57);
            color: #fff;
        }
    }
</style>
