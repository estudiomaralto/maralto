import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
    base: 'mx-auto w-full max-w-[84rem] px-3 md:px-4',
})

interface ContainerProps
    extends ComponentProps<'div'>,
        VariantProps<typeof container> {}

export function Container({ className, children }: ContainerProps) {
    return <div className={container({ className })}>{children}</div>
}
