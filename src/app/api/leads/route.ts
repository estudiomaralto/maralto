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
        budgets,
        deliverables,
        employee,
        disclaimer,
        industry,
        mail,
        name,
        time,
        services,
        referral,
        enterpriseServices,
    }: {
        budgets: string
        deliverables?: string | null
        disclaimer?: string | null
        employee?: string | null
        industry?: string | null
        mail?: string | null
        name?: string | null
        referral?: string | null
        services?: string[] | null
        time?: string | null
        enterpriseServices?: string | null
    } = await request.json()

    try {
        const {
            statusText,
            error: supabaseError,
            data,
        } = await supabase.from('leads').insert([
            {
                budget: budgets,
                deliverables,
                employee,
                disclaimer,
                industry,
                mail,
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
                budget: budgets,
                industry: industry!,
                mail: mail!,
                name: name!,
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
