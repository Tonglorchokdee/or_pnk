<template>
    <v-menu offset-y class="mx-2">
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon x-large v-bind="attrs" v-on="on" elevation="0" >
                <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="">
                </v-avatar>
            </v-btn>
        </template>

        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <v-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="">
                    </v-avatar>
                    <h4>{{ user.firstname }} {{ user.lastname }} {{ user.username }}</h4>
                    <p class="text-caption mt-1">
                        {{ user.email }}
                    </p>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item dense link @click="doLogout">
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                                    $t("layout.logout")
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: "usermenu",
    data() {
        // TODO: Implement routes here
        return {
            user: this.$auth.user,
        };
    },
    methods: {
        doLogout: function () {
            this.$auth.logout().then(() => {
                this.redirect("/login");
            });
        },
        redirect: function (path: string) {
            setTimeout(() => this.$router.push(path), 300)
        }
    },
});
</script>

<style lang="scss" scoped>
</style>