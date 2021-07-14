import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CloudAdminInfoPage from './CloudAdminInfoPage';

type Args = ComponentProps<typeof CloudAdminInfoPage>;

export default {
  title: 'pages/CloudAdminInfoPage',
  component: CloudAdminInfoPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validateUsername: { action: 'validateUsername' },
    validateEmail: { action: 'validateEmail' },
    validatePassword: { action: 'validatePassword' },
  },
  args: {
    title: 'Your Workspace is Ready!',
    subtitle: 'Time to create your first admin user',
    currentStep: 1,
    stepCount: 1,
    passwordRulesHint: 'Password rules description goes here',
    keepPosted: true,
  },
} as Meta<Args>;

export const _CloudAdminInfoPage: Story<Args> = (args) => (
  <CloudAdminInfoPage {...args} />
);
_CloudAdminInfoPage.storyName = 'CloudAdminInfoPage';
