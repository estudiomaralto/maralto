import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import MaraltoMailTemplate from '@/emails/MaraltoMailTemplate'
import { createClient } from '@/lib/supabase/server'

const resend = new Resend('re_NZMdqyzK_D591K6zR3F79M7WrjTFkx2t3')

export async function POST(request: Request) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        employee,
        disclaimer,
        industry,
        mail,
        name,
        time,
        services,
        referral,
        instagram,
        phone,
        enterpriseServices,
    }: {
        created_at: string
        disclaimer: string | null
        employee: string | null
        enterpriseServices: string | null
        id: number
        industry: string | null
        instagram: string | null
        mail: string | null
        name: string | null
        phone: string | null
        referral: string | null
        services: string[] | null
        time: string | null
    } = await request.json()

    try {
        const {
            statusText,
            error: supabaseError,
            data,
        } = await supabase.from('leads').insert([
            {
                employee,
                disclaimer,
                industry,
                mail,
                instagram,
                phone,
                name,
                time,
                services,
                referral,
                enterpriseServices,
            },
        ])

        const {} = await resend.emails.send({
            from: 'Maralto <marketing@estudiomaralto.com>',
            to: ['contato@estudiomaralto.com', 'samuelcardoso555@gmail.com'],
            subject: 'Novo lead! - Estúdio Maralto',
            react: MaraltoMailTemplate({
                industry: industry!,
                mail: mail!,
                name: name!,
                disclaimer: disclaimer!,
                employee: employee!,
                enterpriseServices: enterpriseServices!,
                referral: referral!,
                services: services!,
                time: time!,
                phone: phone!,
                instagram: instagram!,
            }),
        })

        if (supabaseError) {
            console.log(supabaseError)
        }

        return NextResponse.json({ statusText, data })
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}
