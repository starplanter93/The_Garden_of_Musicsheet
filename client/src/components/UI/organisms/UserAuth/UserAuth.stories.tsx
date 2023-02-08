import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import UserAuth from './UserAuth';

export default {
  title: 'Organisms/UserAuth',
  component: UserAuth,
  decorators: [withRouter],
} as ComponentMeta<typeof UserAuth>;

const Template: ComponentStory<typeof UserAuth> = (args) => (
  <UserAuth {...args} />
);

export const Login = Template.bind({});
Login.args = { type: 'Login' };

export const SignUp = Template.bind({});
SignUp.args = { type: 'SignUp' };
