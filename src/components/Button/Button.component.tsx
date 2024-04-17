'use client'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'rounded-full leading-none transition',

    variants: {
        colors: {
            blue: 'bg-blue-500 text-slate-50 hover:bg-blue-950',
            dark: 'bg-slate-950 text-slate-50 hover:bg-blue-500',
            white: 'bg-slate-50',
        },
        sizes: {
            large: 'text-[1.0625rem] px-[1.0625rem] py-[.8125rem]',
            medium: 'text-[.9375rem] px-[1.0625rem] py-[.6875rem]',
            small: 'text-[.8125rem] px-[1.0625rem] py-[.6875rem]',
        },
    },
})

interface ButtonProps
    extends VariantProps<typeof button>,
        ComponentProps<'button'> {
    href?: Url
    content: string
}

export function Button({ content, href, colors, sizes, onClick }: ButtonProps) {
    return href ? (
        <Link href={href} className={button({ colors, sizes })}>
            {content}
        </Link>
    ) : (
        <button onClick={onClick} className={button({ colors, sizes })}>
            {content}
        </button>
    )
}
