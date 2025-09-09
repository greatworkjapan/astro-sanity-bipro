import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: import.meta.env.SANITY_API_VERSION,
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN // 必要な場合のみ
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
