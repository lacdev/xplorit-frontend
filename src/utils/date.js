import { format, formatDistance } from 'date-fns'

const formatDate = (date) => {
  try {
    const result = new Date(date)
    return formatDistance(result, new Date(), {
      addSuffix: true,
      includeSeconds: true,
    })
  } catch (error) {
    console.log(error)
    return ''
  }
}

const formatCreationDate = (date) => {
  try {
    const result = new Date(date)
    return format(result, 'MMM d')
  } catch (error) {
    console.log(error)
    return ''
  }
}

export { formatDate, formatCreationDate }