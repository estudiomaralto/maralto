import { Spinner } from '@/components/Spinner/Spinner.component'

export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center bg-pale-100">
            <Spinner />
        </div>
    )
}
