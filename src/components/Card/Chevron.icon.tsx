import { ComponentProps } from 'react'

interface ChevronProps extends ComponentProps<'svg'> {}

export function Chevron({ ...props }: ChevronProps) {
    return (
        <svg
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.01778 0.5L6.77778 5.44467L11.5378 0.5L13 2.02227L6.77778 8.5L0.555556 2.02227L2.01778 0.5Z"
                fill="currentColor"
            />
        </svg>
    )
}
