<template>
  <div class="collection-wrapper">
    <collection-item
      v-for="(item, index) of collectionData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
  import CollectionItem from './collectionItem.vue';

  export default {
    name: 'Collection',
    props: {
      collectionData: Array
    },
    components: {
      CollectionItem
    }
  }
</script>

<style>

</style>