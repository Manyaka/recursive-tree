<template>
  <li class="node-tree">
    <span class="label">{{ node.title }}</span>

    <ul v-if="node.subitems && node.subitems.length">
      <TreeNode
        v-for="(child, index) in node.subitems"
        v-bind:key="index"
        v-bind:node="child"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
