export const formatTimestamp = (timestamp: number) => {
    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    const date = new Date(timestamp)
    const dayOfWeek = daysOfWeek[date.getUTCDay()]
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()

    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${dayOfWeek}, ${formattedDay}.${formattedMonth}.${year}`
}
