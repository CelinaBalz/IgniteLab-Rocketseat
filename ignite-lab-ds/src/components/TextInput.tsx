import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot (props: TextInputRootProps){
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded w-full outline-none bg-gray-800  focus:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

//function TextInputIcon () {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props: TextInputInputProps) {
    return(
            <input
                className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 '
                    {...props}
                    >
            </input>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}