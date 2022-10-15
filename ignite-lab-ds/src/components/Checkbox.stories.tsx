import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from "./checkbox";
import { Text } from './Text';

export default{
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text>Lembrar de mim por 30 dias.</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
