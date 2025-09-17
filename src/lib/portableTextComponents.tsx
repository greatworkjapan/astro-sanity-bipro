// src/lib/portableTextComponents.tsx
import type { PortableTextComponents } from "@portabletext/astro";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 class="text-3xl font-bold mt-10 mb-6 border-b-2 border-gray-200 pb-1">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 class="text-2xl font-bold mt-8 mb-4 border-l-4 pl-2 border-blue-500">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 class="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => <p class="my-4 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote class="border-l-4 pl-4 text-gray-600 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul class="list-disc ml-6 my-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol class="list-decimal ml-6 my-3">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li class="my-1">{children}</li>,
    number: ({ children }) => <li class="my-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong class="font-bold">{children}</strong>,
    em: ({ children }) => <em class="italic">{children}</em>,
    code: ({ children }) => (
      <code class="bg-gray-100 px-1 rounded text-sm">{children}</code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} class="text-blue-600 underline hover:text-blue-800">
        {children}
      </a>
    ),
  },
};
