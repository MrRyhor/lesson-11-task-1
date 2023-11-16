<template>
    <fleet-wehicals-list />
    <selection-drivers-to-busses />
</template>
<script>
import SelectionDriversToBusses from './SelectionDriversToBusses.vue'
import FleetWehicalsList from './FleetWehicalsList.vue'
export default {
    name: 'FleetWehicalsView',

    components: {
        SelectionDriversToBusses,
        FleetWehicalsList
    }
}
</script>
<style lang="scss" scoped></style>
