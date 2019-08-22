<template>
  <div>
    <Tree v-bind:tree-data="data" />
  </div>
</template>

<script>
import data from '@/api.js';
import Tree from '@/components/Tree.vue';

export default {
  name: 'App',
  components: {
    Tree
  },
  data: () => ({
    data
  })
};
</script>
