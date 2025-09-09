import type { APIRoute } from 'astro'
import { client } from '../../lib/sanity'
import { allPostsQuery } from '../../lib/queries'

export const GET: APIRoute = async () => {
  const posts = await client.fetch(allPostsQuery)
  const items = posts.map((p:any)=>`
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>https://YOUR_DOMAIN/blog/${p.slug}</link>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt ?? ''}]]></description>
    </item>`).join('')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <rss version="2.0"><channel>
      <title>Blog RSS</title>
      <link>https://YOUR_DOMAIN/</link>
      <description>Latest posts</description>
      ${items}
     </channel></rss>`,
    { headers: { 'Content-Type': 'application/xml' } }
  )
}
