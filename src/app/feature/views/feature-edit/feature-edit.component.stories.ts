import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureEditComponent } from './feature-edit.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FeatureEditComponent> = {
  title: 'BPI/FeatureEditComponent',
  component: FeatureEditComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: FeatureEditComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<FeatureEditComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Edit: Story = {
  args: {
    show: true,
    currentUser: {
      id: '1',
      name: 'Franco',
      email: 'nobody@example.com',
    },
  },
};
