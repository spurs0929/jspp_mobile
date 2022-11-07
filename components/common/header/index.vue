<template>
  <header class="header">
    <header-back-icon
      :backIconShow="backIconShow"
    />
    <header-logo />
    <header-list-icon
      :listIconShow="listIconShow"
    />
  </header>
</template>

<script>

  import HeaderBackIcon from '@/components/common/header/backIcon.vue';
  import HeaderListIcon from '@/components/common/header/listIcon.vue';
  import HeaderLogo from '@/components/common/header/logo.vue';

  export default {
    name: 'MHeader',
    components: {
      HeaderBackIcon,
      HeaderListIcon,
      HeaderLogo
    },
    props: {
      backIconShow: {
        type: Boolean,
        default(){
          return false
        }
      },
      listIconShow: {
        type: Boolean,
        default(){
          return true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: .44rem;
    background-color: #fff;
    border-bottom: .01rem solid #ddd;
  }
</style>