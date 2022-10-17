import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default{
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsun',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsun',
        size: 'sm',
    },
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsun',
        size: 'lg',
    },
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    },
    argTypes:{
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
     }
}

