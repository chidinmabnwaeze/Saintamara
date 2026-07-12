export type IconName =
  | 'companionship'
  | 'household'
  | 'independence'
  | 'respite'
  | 'community'

export interface Service {
  id: string
  icon: IconName
  title: string
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'companionship',
    icon: 'companionship',
    title: 'Companionship & social support',
    summary:
      'Familiar company that keeps the days sociable and the week worth looking forward to.',
    points: [
      'Befriending, conversation and regular company visits',
      'Accompanying to appointments, shopping, church or the park',
      'Shared hobbies — puzzles, reading, music',
      'Phone and video check-in calls',
    ],
  },
  {
    id: 'household',
    icon: 'household',
    title: 'Household & daily living',
    summary:
      'A hand with the practical things, so home stays comfortable and easy to manage.',
    points: [
      'Light housekeeping',
      'Laundry, ironing and bed making',
      'Meal preparation',
      'Grocery shopping and prescription pick-up, where the client self-administers',
    ],
  },
  {
    id: 'independence',
    icon: 'independence',
    title: 'Independence & wellbeing',
    summary:
      'Gentle prompts and organisation that help people stay in charge of their own routine.',
    points: [
      'Reminders and prompting through the day',
      'Help with appointments, forms and letters',
      'Budgeting support and bill reminders',
      'Digital help — Zoom, WhatsApp and online shopping',
    ],
  },
  {
    id: 'respite',
    icon: 'respite',
    title: 'Respite & family support',
    summary:
      'Time for family carers to rest, knowing someone dependable is there.',
    points: [
      'A sitting service so family carers can take a break',
      'Overnight sleep-in visits for safety and companionship only',
    ],
  },
  {
    id: 'community',
    icon: 'community',
    title: 'Community & specialist support',
    summary:
      'Support that reaches beyond the front door and out into everyday life.',
    points: [
      'Community transport and escort services',
      'Post-hospital settling-in support, with no personal care',
      'Community access for adults with learning disabilities',
    ],
  },
]
