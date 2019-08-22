<template>
  <div>
    <Tree v-bind:tree-data="tree" />
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue';

export default {
  components: {
    Tree
  },
  data: () => ({
    tree: {
      label: 'A cool folder',
      children: [
        {
          label: 'A cool sub-folder 1',
          children: [
            { label: 'A cool sub-sub-folder 1' },
            { label: 'A cool sub-sub-folder 2' }
          ]
        },
        { label: 'This one is not that cool' }
      ]
    }
  })
};
</script>
