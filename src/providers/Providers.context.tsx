import { ReactNode } from 'react'

import { TimeContextProvider } from '@/contexts/timeContext'

export function Providers({ children }: { children: ReactNode }) {
    return <TimeContextProvider>{children}</TimeContextProvider>
}
