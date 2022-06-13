<template>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="12">
            <TabMenu></TabMenu>
            <v-card outlined class="card-main">
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">
                            ค้นหาตารางผ่าตัด
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <Roomlist />
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import Roomlist from '~/components/schedule/roomlist.vue';
export default {
    auth: true,
    name: "schedule",
    layout: "main",
    methods: {
    },
    components:{
    Roomlist
    }
};
</script>

<style lang="scss" scoped>
</style>
