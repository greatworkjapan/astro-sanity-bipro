import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from 'sanity'

export const renderPortableText = (blocks: PortableTextBlock[]) =>
  toHTML(blocks || [], {
    components: {
      /* 画像・コードなどを拡張したい場合はここに追加 */
    }
  })
