export default function Availability({
    avalibility,
}: {
    avalibility: 'available' | 'unavailable'
}) {
    return (
        <>
            {avalibility === 'available' ? (
                <svg
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
                        fill="#4DBE35"
                    />
                    <rect
                        x="1"
                        y="1"
                        width="10"
                        height="10"
                        rx="5"
                        stroke="#4DBE35"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                    />
                </svg>
            ) : (
                <svg
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
                        fill="#F32C2C"
                    />
                    <rect
                        x="1"
                        y="1"
                        width="10"
                        height="10"
                        rx="5"
                        stroke="#F32C2C"
                        stroke-opacity="0.2"
                        stroke-width="2"
                    />
                </svg>
            )}
        </>
    )
}
