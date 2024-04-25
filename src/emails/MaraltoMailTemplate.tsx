import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
} from '@react-email/components'

export const MaraltoMailTemplate = ({
    budget,
    industry,
    mail,
    name,
    deliverables,
    disclaimer,
    employee,
    enterpriseServices,
    referral,
    services,
    time,
    instagram,
    phone,
}: {
    budget: string
    deliverables: string
    disclaimer: string
    employee: string
    enterpriseServices: string
    industry: string
    instagram: string
    mail: string
    name: string
    phone: string
    referral: string
    services: string[]
    time: string
}) => (
    <Html>
        <Head />
        <Preview>Novo lead | Estúdio Maralto</Preview>
        <Body style={main}>
            <Container style={container}>
                <div>
                    <Heading style={h1}>Novo lead!</Heading>

                    <Text style={{ ...text, marginBottom: '14px' }}>
                        Um lead com os seguintes dados entrou em contato a
                        Maralto.
                    </Text>
                </div>
                <code style={code}>
                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {mail}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {phone}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {instagram}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {employee}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {budget}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {deliverables}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {enterpriseServices}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {time}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {industry}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {referral}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {services}
                    </Text>

                    <Text
                        style={{
                            ...text,
                            margin: '1rem 0',
                        }}
                    >
                        {disclaimer}
                    </Text>
                </code>
                <Text
                    style={{
                        ...text,
                        color: '#ababab',
                        marginTop: '14px',
                        marginBottom: '16px',
                    }}
                >
                    Para mais informações, acesse o dashboard em:{' '}
                    <Link href="https://supabase.com/" target="_blank">
                        supabase.com
                    </Link>
                </Text>

                <Text style={footer}>
                    <Link
                        href="https://www.estudiomaralto.com"
                        target="_blank"
                        style={{ ...link, color: '#898989' }}
                    >
                        Estudio Maralto. @{new Date().getFullYear()}
                    </Link>
                    <br />
                    Todos os direitos reservados.
                </Text>
            </Container>
        </Body>
    </Html>
)

export default MaraltoMailTemplate

const main = {
    backgroundColor: '#ffffff',
}

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
}

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
}

const link = {
    color: '#2754C5',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
}

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
}

const footer = {
    color: '#898989',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
}

const code = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
}
