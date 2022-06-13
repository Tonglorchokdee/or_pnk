<template>
    <v-app dark>
        <div>
            <v-main>
                <Nuxt />
            </v-main>
        </div>
    </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
};
</script>
