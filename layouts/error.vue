<template>
  <div class="container">
    <m-header
      :backIconShow="true"
      :listIconShow="false"
    />
    <error-board />
  </div>
</template>

<script>

  import MHeader from '@/components/common/header/index.vue';
  import ErrorBoard from '@/components/common/error/index.vue';

  export default {
    props: [ 'error' ],
    components: {
      MHeader,
      ErrorBoard
    }
  }
</script>

<style>

</style>