export function Formatter({ content }: { content?: string }) {
    return (
        <>
            {content
                ?.split('\n')
                .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </>
    )
}
