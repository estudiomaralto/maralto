export const formatPhoneNumber = (value: string) => {
    let strValue = value || ''

    return strValue
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/^\((\d{2})\) 9/, '($1) 9 ')
        .replace(/(\d)(\d{4})$/, '$1-$2')
}
