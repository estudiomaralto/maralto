import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const services = [
    'Identidade visual',
    '3D',
    'Motion design',
    'Naming',
    'Design de interface',
    'Desenvolvimento Web',
] as const

const contactSchema = z.object({
    name: z.string().min(2, 'Digite seu nome e sobrenome'),
    mail: z.string().email('Digite um e-mail válido'),
    services: z
        .array(z.enum(services))
        .nonempty('Selecione, pelo menos, um serviço'),
})

type ContactSchema = z.infer<typeof contactSchema>

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            services: [services[0]],
        },
    })

    function handleOnSubmit(data: ContactSchema) {
        console.log(data)
    }

    return (
        <form
            className="flex h-full flex-col justify-between"
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
                        className="flex flex-col items-start gap-2"
                    >
                        <span>Qual o seu nome?</span>
                        <input
                            id="name"
                            className={`block w-full rounded-lg border-[.125rem] border-[transparent] bg-pale-50 p-[.875rem] placeholder:text-pale-600 ${errors.name ? 'text-red-600 border-red-600' : 'text-pale-600'}`}
                            placeholder="Marcos Condé"
                            type="text"
                            {...register('name')}
                        />
                        {errors.name && (
                            <span className="text-red-600 flex items-center gap-2 text-[.8125rem] tracking-[0.04em]">
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
                                        stroke-opacity="0.2"
                                        stroke-width="2"
                                    />
                                </svg>
                                {errors.name?.message}
                            </span>
                        )}
                    </label>

                    <label
                        htmlFor="mail"
                        className="flex flex-col items-start gap-2"
                    >
                        <span>Seu e-mail</span>
                        <input
                            id="mail"
                            className={`block w-full rounded-lg border-[.125rem] border-[transparent] bg-pale-50 p-[.875rem] placeholder:text-pale-600 ${errors.mail ? 'text-red-600 border-red-600' : 'text-pale-600'}`}
                            placeholder="email@exemplo.com"
                            type="email"
                            {...register('mail')}
                        />
                        {errors.mail && (
                            <span className="text-red-600 flex items-center gap-2 text-[.8125rem] tracking-[0.04em]">
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
                                        stroke-opacity="0.2"
                                        stroke-width="2"
                                    />
                                </svg>
                                {errors.mail?.message}
                            </span>
                        )}
                    </label>

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
                            <span className="text-red-600 flex items-center gap-2 text-[.8125rem] tracking-[0.04em]">
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
                </div>
            </div>

            <button
                type="submit"
                className="flex items-center gap-2 self-end rounded-full bg-blue-500 px-5 py-3 text-blue-50"
            >
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
            </button>
        </form>
    )
}
