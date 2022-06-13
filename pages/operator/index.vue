<template>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="12">
            <TabMenu></TabMenu>
            <v-card outlined class="card-main">
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">
                            ห้องผ่าตัด
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            ผ่าตัดเสร็จแล้ว
                            กำลังผ่าตัด
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    auth: true,
    name: "operator",
    layout: "main",
    methods: {
    },
};
</script>

<style lang="scss" scoped>
</style>
