<template>
  <div>
    <Tree v-bind:tree-data="data" />
    <hr />
    <TreeArray v-bind:tree-data-array="dataArray" />
  </div>
</template>

<script>
import data from '@/api.js';
import dataArray from '@/apiArray.js';
import Tree from '@/components/Tree.vue';
import TreeArray from '@/components/TreeArray';

export default {
  name: 'App',
  components: {
    TreeArray,
    Tree
  },
  data: () => ({
    data,
    dataArray
  })
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
