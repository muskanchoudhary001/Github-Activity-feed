// src/utils/dateUtils.js
import { isToday, isYesterday } from "date-fns"

export function formatDateLabel(dateStr) {
  if (!dateStr) return "" // prevent crashes if null/undefined

  const date = new Date(dateStr)

  if (isToday(date)) return "Today"
  if (isYesterday(date)) return "Yesterday"

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}
