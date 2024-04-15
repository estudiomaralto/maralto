'use client'
import { useRouter } from 'next/router'

export default function Error() {
    const { replace } = useRouter()

    replace('/')
}
