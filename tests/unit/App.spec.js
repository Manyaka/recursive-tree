import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Tree from '@/components/Tree.vue';
import TreeArray from '@/components/TreeArray';

describe('Проверяем App.vue:', () => {
  let shallowWrapper = shallowMount(App);

  it('содержит компонент Tree', () => {
    // console.log(wrapper.html());
    expect(shallowWrapper.contains(Tree)).toBe(true);
  });

  it('содержит компонент TreeArray', () => {
    expect(shallowWrapper.contains(TreeArray)).toBe(true);
  });
});
