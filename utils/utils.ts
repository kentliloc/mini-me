import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTo12Hour = (time: string) => {
  const [hour, minute] = time.split(':').map(Number)
  const period = hour >= 12 ? 'pm' : 'am'
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`
}

export const formatCity = (city: string): string => {
  const decodedCity = decodeURIComponent(city).trim()

  const formattedCity = decodedCity
    .toLowerCase()
    .replace(/\./g, '--')
    .replace(/\s+/g, '-')
    .replace(/--/g, '-')

  return formattedCity
}