export interface Trainer {
  name: string
  role: string
  avatar: string
  image: string
}

export interface PricingPlan {
  name: string
  price: number
  period: string
  features: string[]
  badge?: string
  featured?: boolean
}

export interface ContactInfo {
  type: 'address' | 'phone' | 'email' | 'hours'
  icon: string
  title: string
  content: string[]
}

export interface GalleryItem {
  id: string
  image: string
  title: string
  description: string
  category: 'equipment' | 'classes' | 'trainers' | 'facilities'
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Stat {
  number: number
  label: string
}

