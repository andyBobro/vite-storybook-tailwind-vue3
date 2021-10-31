import Icon from './index.vue';
import sprite from 'assets/icons/sprite'

const keys = Object.keys(sprite)

export default {
  component: Icon,
  title: 'components/common/Icon',
  args: { name: keys[0] },
  argTypes: {
    name: {
      options: keys,
      control: 'select'
    },
  },
};

export const Default = (args, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<Icon v-bind="args" class="icon" />`,
});