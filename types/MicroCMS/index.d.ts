export type Record<T> = T & {
  id: string!
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

export type PageInfo<T> = {
  contents: Record<T>[]
  totalCount: number
  offset: number
  limit: number
}

export type Article = Record<{
  title: string
  description: string
  contents: ContentBlock[]
  author: Author
}>

export type Author = Record<{
  name: string
}>

export type Image = {
  url: string
}

export type Card = {
  fieldId: "card"
  title?: string
  body?: string
  image?: Image
}

export type Affiliate = {
  fieldId: "affiliate"
  image: Image
  title: string
  url: string
  price: number
}

export type ContentBlock = Card | Affiliate