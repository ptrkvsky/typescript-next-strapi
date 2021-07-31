import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemMenu from '.';

export default {
  title: 'Navigation/ItemMenu',
  component: ItemMenu,
} as ComponentMeta<typeof ItemMenu>;

const Template: ComponentStory<typeof ItemMenu> = (args) => <ItemMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  itemMenu: {
    href: "/",
    value: "A propos",
  },
  test: "dark"
};
