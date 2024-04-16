import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const referrals = [
    'Behance',
    'Instagram',
    'Anúncios',
    'Dribbble',
    'Recomendação',
] as const

const services = [
    'Identidade visual',
    '3D',
    'Motion design',
    'Naming',
    'Design de interface',
    'Desenvolvimento Web',
] as const

const employees = ['Apenas eu', 'Até 10', 'Até 30', '+50'] as const

const budgets = [
    'Até R$ 8.000,00',
    'Até R$ 15.000,00',
    'Mais de R$ 30.000,00',
] as const

const contactSchema = z.object({
    name: z.string().min(2, 'Digite seu nome e sobrenome.'),

    mail: z.string().email('Digite um e-mail válido.'),

    referral: z.string(z.enum(referrals)),

    services: z.array(z.string(z.enum(services))),

    employee: z.string(z.enum(employees)),

    industry: z.string().min(2, 'Digite um segmento'),

    time: z.string().min(1, 'Digite um valor válido.'),

    enterpriseServices: z
        .string()
        .min(1, 'Digite, pelo menos, um produto, serviço.'),

    disclaimer: z.string().min(1, 'Dê mais detalhes.'),

    budgets: z.string(z.enum(budgets)),

    deliverables: z.string().optional(),
})

type ContactSchema = z.infer<typeof contactSchema>

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted, isLoading, isSubmitSuccessful },
        reset,
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            services: [services[0]],
            referral: referrals[0],
            employee: employees[0],
            budgets: budgets[0],
        },
    })

    function handleOnSubmit(data: ContactSchema) {
        console.log(data)
    }

    return isSubmitSuccessful ? (
        <div className="md:max-w-[90%]">
            <span className="text-[1.0625rem] leading-tight md:text-[1.5625rem]">
                Seus dados foram enviados com sucesso! Em breve nossa equipe
                entrará em contato com você.
            </span>
        </div>
    ) : (
        <form
            className="flex h-full flex-col justify-between gap-10"
            onSubmit={handleSubmit(handleOnSubmit)}
        >
            <div className="flex flex-col gap-10">
                <div className="md:max-w-[90%]">
                    <span className="text-[1.0625rem] leading-tight md:text-[1.5625rem]">
                        Esse formulário é uma primeira etapa importante para
                        garantir que tenhamos uma compreensão clara do seu
                        projeto.
                    </span>
                </div>
                <div className="flex flex-col gap-10">
                    <label
                        htmlFor="name"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span>Qual o seu nome?</span>
                        <input
                            id="name"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Marcos Condé"
                            type="text"
                            {...register('name')}
                        />
                        {errors.name && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.name?.message}
                            </span>
                        )}
                    </label>

                    <label
                        htmlFor="mail"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span>Seu e-mail</span>
                        <input
                            id="mail"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="email@exemplo.com"
                            type="email"
                            {...register('mail')}
                        />
                        {errors.mail && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.mail?.message}
                            </span>
                        )}
                    </label>

                    <div className="flex flex-col items-start gap-2">
                        <span>Como chegou até nós?</span>
                        <div className="flex flex-wrap gap-2">
                            {referrals.map((referral, index) => (
                                <label
                                    className="block cursor-pointer rounded-full border border-pale-950 p-6 px-5 py-[.8125rem] leading-none transition hover:border-[transparent] hover:bg-blue-900 hover:text-blue-50 has-[:checked]:border-[transparent] has-[:checked]:bg-blue-500 has-[:checked]:text-blue-50"
                                    key={index}
                                >
                                    <input
                                        type="radio"
                                        className="hidden h-full w-full"
                                        value={referral}
                                        {...register('referral')}
                                    />
                                    {referral}
                                </label>
                            ))}
                        </div>
                        {errors.referral && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.referral?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <span>Quais serviços que você deseja contratar.</span>
                        <div className="flex flex-wrap gap-2">
                            {services.map((service, index) => (
                                <label
                                    className="block cursor-pointer rounded-full border border-pale-950 p-6 px-5 py-[.8125rem] leading-none transition hover:border-[transparent] hover:bg-blue-900 hover:text-blue-50 has-[:checked]:border-[transparent] has-[:checked]:bg-blue-500 has-[:checked]:text-blue-50"
                                    key={index}
                                >
                                    <input
                                        type="checkbox"
                                        className="hidden h-full w-full"
                                        value={service}
                                        {...register('services')}
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                        {errors.services && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.services?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <span>
                            Quantos funcionários, atualmente, tem a sua empresa?
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {employees.map((employee, index) => (
                                <label
                                    className="block cursor-pointer rounded-full border border-pale-950 p-6 px-5 py-[.8125rem] leading-none transition hover:border-[transparent] hover:bg-blue-900 hover:text-blue-50 has-[:checked]:border-[transparent] has-[:checked]:bg-blue-500 has-[:checked]:text-blue-50"
                                    key={index}
                                >
                                    <input
                                        type="radio"
                                        className="hidden h-full w-full"
                                        value={employee}
                                        {...register('employee')}
                                    />
                                    {employee}
                                </label>
                            ))}
                        </div>
                        {errors.employee && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.employee?.message}
                            </span>
                        )}
                    </div>

                    <label
                        htmlFor="industry"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span>Qual o segmento da empresa?</span>
                        <input
                            id="industry"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Digite o segmento da sua empresa"
                            type="text"
                            {...register('industry')}
                        />
                        {errors.industry && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.industry?.message}
                            </span>
                        )}
                    </label>

                    <label
                        htmlFor="time"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span>Qual anos tem sua empresa?</span>
                        <input
                            id="time"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Mais de 10 anos..."
                            type="text"
                            {...register('time')}
                        />
                        {errors.time && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.time?.message}
                            </span>
                        )}
                    </label>

                    <label
                        htmlFor="enterpriseServices"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span>
                            Quais são os produtos ou serviços oferecidos?
                        </span>
                        <input
                            id="enterpriseServices"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Digite seus principais serviços"
                            type="text"
                            {...register('enterpriseServices')}
                        />
                        {errors.enterpriseServices && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.enterpriseServices?.message}
                            </span>
                        )}
                    </label>

                    <label
                        htmlFor="deliverables"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span className="flex flex-col">
                            Além da marca, você gostaria de receber um orçamento
                            para outros elementos derivados da nova identidade
                            visual a ser criada?
                            <span className="block max-w-[80%] text-[.8125rem] text-slate-400">
                                Ex.: itens de papelaria, itens digitais, itens
                                promocionais, etc. Se sim, por favor liste quais
                                e quantos de cada.
                            </span>
                        </span>
                        <input
                            id="deliverables"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Digite seus principais serviços"
                            type="text"
                            {...register('deliverables')}
                        />
                        {errors.deliverables && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.deliverables?.message}
                            </span>
                        )}
                    </label>

                    <div className="flex flex-col items-start gap-2">
                        <span className="max-w-[75%]">
                            Qual é o seu orçamento estimado para o projeto de
                            design de marca?
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {budgets.map((budget, index) => (
                                <label
                                    className="block cursor-pointer rounded-full border border-pale-950 p-6 px-5 py-[.8125rem] leading-none transition hover:border-[transparent] hover:bg-blue-900 hover:text-blue-50 has-[:checked]:border-[transparent] has-[:checked]:bg-blue-500 has-[:checked]:text-blue-50"
                                    key={index}
                                >
                                    <input
                                        type="radio"
                                        className="hidden h-full w-full"
                                        value={budget}
                                        {...register('budgets')}
                                    />
                                    {budget}
                                </label>
                            ))}
                        </div>
                        {errors.budgets && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.budgets?.message}
                            </span>
                        )}
                    </div>

                    <label
                        htmlFor="disclaimer"
                        className="flex cursor-pointer flex-col items-start gap-2"
                    >
                        <span className="max-w-[85%]">
                            Fique à vontade para contribuir com outras
                            informações pertinentes sobre sua marca.
                        </span>
                        <textarea
                            id="disclaimer"
                            className={`block w-full rounded-lg border-[.125rem]  bg-slate-50 p-[.875rem] placeholder:text-pale-600 target:outline-blue-500 focus:outline-blue-500 ${errors.name ? 'text-red-600 outline-red-600' : 'border-slate-100 text-pale-600'}`}
                            placeholder="Digite aqui..."
                            {...register('disclaimer')}
                        />
                        {errors.disclaimer && (
                            <span className="flex items-center gap-2 text-[.8125rem] tracking-[0.04em] text-red-600">
                                <svg
                                    className="animate-pulse"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="8"
                                        height="8"
                                        rx="4"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="10"
                                        height="10"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {errors.disclaimer?.message}
                            </span>
                        )}
                    </label>
                </div>
            </div>

            <div className="flex w-full justify-end border-t border-t-blue-950 border-opacity-[.08] pb-4 pt-6 md:pb-8">
                <button
                    type="submit"
                    className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-blue-50 transition hover:bg-slate-950"
                >
                    {isLoading ? (
                        'Enviando...'
                    ) : (
                        <>
                            Enviar
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </form>
    )
}
