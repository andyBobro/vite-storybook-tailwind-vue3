import Foo from './Foo.vue';

export default {
  component: Foo,
  title: 'Components/Foo',
};

export const Primary = () => ({
  components: { Foo },
  template: '<Foo />',
});