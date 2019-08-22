<template>
  <div class="tree">
    <ul class="tree-list">
      <TreeNode v-bind:node="treeData" />
    </ul>
  </div>
</template>

<script>
import TreeNode from '@/components/TreeNode.vue';

export default {
  components: {
    TreeNode
  },
  props: {
    treeData: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
