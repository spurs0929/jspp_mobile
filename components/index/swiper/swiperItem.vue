<template>
  <a 
    :href="item.href"
    target="_blank"
  >
    <img 
      :src="IMG_BASE + item.key" 
      :alt="item.title" />
  </a>
</template>

<script>

  import { URL } from '@/config/config.js';

  export default {
    name: 'SwiperItem',
    props: {
      item: Object
    },
    data(){
      return {
        IMG_BASE: URL.IMG_BASE
      }
    }
  }
</script>

<style>

</style>