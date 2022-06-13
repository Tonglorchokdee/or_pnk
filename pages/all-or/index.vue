<template>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="12">
            <TabMenu></TabMenu>
            <v-card outlined class="card-main">
                <selectdate></selectdate>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import Selectdate from '~/components/all-or/selectdate.vue';
export default {
  components: { selectdateSelectdate },
    auth: true,
    name: "all or",
    layout: "main",
    methods: {
    },
};
</script>

<style lang="scss" scoped>

</style>
