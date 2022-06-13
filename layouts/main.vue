<template>
    <v-app dark>
        <div class="d-flex">
            <v-app-bar :clipped-left="clipped" fixed app class="white">
                <NuxtLink to="/">
                    <img src="/logo.png" height="45" alt="" class="d-none d-sm-flex">
                    <img src="/logo-xs.png" height="45" alt="" class="d-flex d-sm-none ">
                </NuxtLink>
                <v-spacer />
                <v-tabs v-model="group" class="d-none d-sm-flex justify-sm-end mx-4">
                    <v-tab to="all-or">ตารางผ่าตัด</v-tab>
                    <v-tab to="schedule-calendar">ตารางเคส OR</v-tab>
                </v-tabs>
                <UserMenu />
                <v-app-bar-nav-icon class="ml-2 d-flex d-sm-none" @click.stop="drawer = !drawer" />
            </v-app-bar>
            <v-main>
                <v-container>
                    <div class="wrapper-content">
                        <Nuxt />
                    </div>
                </v-container>
            </v-main>
            <v-footer :absolute="!fixed" app>
                <span>&copy; {{ new Date().getFullYear() }} | version 1</span>
            </v-footer>
        </div>
        <v-navigation-drawer v-model="drawer" absolute temporary class="d-flex d-sm-none">
            <v-list nav>
                <v-list-item-group v-model="group" active-class="primary text-{white}">
                    <v-list-item>
                        <v-list-item-title>ตารางผ่าตัด</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>ตารางเคส OR</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
    name: "mainLayout",
    data() {
        // TODO: Implement routes here
        return {
            drawer: false,
        };
    },
    methods: {
        doLogout: function () {
            this.$auth.logout().then(() => {
                this.redirect("/login");
            });
        }
    },
};
</script>
