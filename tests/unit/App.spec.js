import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Tree from '@/components/Tree.vue';

describe('Проверяем App.vue:', () => {
  it('содержит компонент Tree', () => {
    let wrapper = shallowMount(App);
    // console.log(wrapper.html());
    expect(wrapper.contains(Tree)).toBe(true);
  });
});
