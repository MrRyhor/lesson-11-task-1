<template>
    <drivers-filter />
    <drivers-list />
</template>
<script>
import DriversFilter  from './DriversFilter.vue'    
import DriversList from './DriversList.vue'
export default {
    name: 'DriversView',

    components: { DriversList, DriversFilter },
}
</script>
<style lang="scss" scoped></style>
