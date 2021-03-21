type ReminderType = "img" | "timer"

export type Reminder = {
  type: ReminderType
  img?: string
  title: string
  text: string
}
