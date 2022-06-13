<template>
    <v-btn @click="goBack" color="" class="mx-2" elevation="0">
        ยกเลิก
    </v-btn>
</template>

<script>
export default {
    name: "goBack",
    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    }
};
</script>
