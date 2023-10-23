import { tw } from '.'

export const util = {
   
    button: tw.variants({
        base: {
            display: 'flex',
        },
        variants: {
            color: {
                blue: {
                    color: 'text-blue-600',
                },
            },
        },
    }),
} as const
