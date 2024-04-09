import { ReactNode } from 'react'

import { ContactContextProvider } from '@/contexts/contactProvider'
import { TimeContextProvider } from '@/contexts/timeContext'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <TimeContextProvider>
            <ContactContextProvider>{children}</ContactContextProvider>
        </TimeContextProvider>
    )
}
