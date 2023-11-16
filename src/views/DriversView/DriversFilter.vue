<template>
    <div class="filter-container">
        <h1>Filters:</h1>
        <div>
            <label
                >Name:
                <input v-model = "filterData.name" type="text" />               
            </label>
        </div>
        <div>
            <label>
                Up:
                <input v-model.lazy = "filterData.expUp" type="number" />                
            </label>
            <label>
                To:
                <input v-model.lazy = "filterData.expTo" type="number" />
            </label>
        </div>
        <button type="button" @click = "clearFilter">Clear Filter</button>
    </div>
    
</template>
<script>
    import {mapActions} from 'vuex'
export default {
    name: 'DriversFilter',

    data() {
        return {
            filterData: {}
        }
    },

    watch:{
        filterData:{
            handler(newValue){
                this.setFilterObj(newValue)
            },
            deep:true
        }
    },
    methods: {
        ...mapActions('drivers', ['setFilterObj']),
        clearFilter(){
            this.filterData = {}
        }
    },

}
</script>
<style lang="scss" scoped>
    .filter-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 900px;        
    }
</style>
