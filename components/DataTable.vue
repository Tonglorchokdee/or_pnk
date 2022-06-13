<template>
  <v-card class="elevation-1">
    <v-data-table
      :headers="headers"
      :loading="loading"
      loading-text="Loading... Please wait"
      :items="items"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

/**
 *  <DataTable 
 *      path="/api/news/admin" 
 *      field="news" 
 *      :attributes="[
 *          { key: 'data_title', label: 'news.data.header.title' },
 *          { key: 'data_type', label: 'news.data.header.type' },
 *          { key: 'created_date', label: 'news.data.header.created_date' },
 *      ]"
 *  />
**/

export default Vue.extend({
    name: "DataTable",
    props: ['path', 'field', 'attributes'],
    data: function(): { loading: boolean, items: Array<any>, headers: Array<string>} {
        return {
            loading: true,
            items: [],
            headers: this.attributes
                .map((attribute:{ key: string, label: string }, i: number) => ({
                    text: this.$t(attribute.label),
                    align: 'start',
                    sortable: false,
                    value: attribute.key,
                })
            )
        }
    },
    mounted(){
        this.$axios.$request({
            url: this.path,
            method: 'GET'
        }).then((response) => {
            this.loading = false
            this.items = response[this.field]
            console.log(this.items)
        }).catch(err => console.error(err))
    }
});
</script>

<style lang="scss" scoped>
.menu {
    top: 3em;
    left: 10px;
}
.full-height {
    height: 100vh;
}

.sidebar {
    z-index: 100;
    position: fixed;
}
</style>