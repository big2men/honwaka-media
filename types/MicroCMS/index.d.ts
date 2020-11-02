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
  contents: any[]
  author: Author
}>

export type Author = Record<{
  name: string
}>