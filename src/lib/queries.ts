export const allPostsQuery = `
*[_type == "post"] | order(publishedAt desc){
  _id, title, excerpt, publishedAt,
  "slug": slug.current,
  "categories": categories[]->{"title": title, "slug": slug.current},
  "tags": tags[]->{"title": title, "slug": slug.current}
}
`

export const postSlugsQuery = `*[_type=="post" && defined(slug.current)]{"slug":slug.current}`

export const postBySlugQuery = `
*[_type=="post" && slug.current==$slug][0]{
  _id,
  title,
  excerpt,
  publishedAt,
  editorMode,
  bodyRich,
  bodyHtml,
  "slug": slug.current,
  "categories": categories[]->{
    "title": title,
    "slug": slug.current
  },
  "tags": tags[]->{
    "title": title,
    "slug": slug.current
  },
  seo
}
`

export const categorySlugsQuery = `*[_type=="category"]{"slug":slug.current,title}`
export const tagSlugsQuery = `*[_type=="tag"]{"slug":slug.current,title}`

export const postsByCategoryQuery = `
*[_type=="post" && $slug in categories[]->slug.current] | order(publishedAt desc){
  title, excerpt, "slug": slug.current, publishedAt
}
`

export const postsByTagQuery = `
*[_type=="post" && $slug in tags[]->slug.current] | order(publishedAt desc){
  title, excerpt, "slug": slug.current, publishedAt
}
`
