import { ComponentProps } from 'react'

interface ContainerProps extends ComponentProps<'div'> {}

export function Container({ className, children }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-[84rem] px-4 ${className}`}>
            {children}
        </div>
    )
}
