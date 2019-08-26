<template>
  <div class="tree">
    <ul class="tree-list">
      <TreeNode
        v-for="(node, index) in treeDataArray"
        v-bind:key="`node_array_${index}`"
        v-bind:node="node"
      />
    </ul>
  </div>
</template>

<script>
import TreeNode from '@/components/TreeNode.vue';

export default {
  name: 'TreeArray',
  components: {
    TreeNode
  },
  props: {
    treeDataArray: {
      type: Array,
      default: () => []
    }
  }
};
</script>
