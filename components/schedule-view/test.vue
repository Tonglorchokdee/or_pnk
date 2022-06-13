<template>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="12">
            <v-card outlined class="">
                <mainLayoutdatacase></mainLayoutdatacase>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import mainLayoutdatacase from '~/components/schedule-view/Datacase.vue';
export default {
    components: { mainLayoutdatacase },
    auth: true,
    name: "schedule view",
    layout: "main",
    methods: {
    },
};
</script>

<style lang="scss" scoped>

</style>