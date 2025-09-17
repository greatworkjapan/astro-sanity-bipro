// src/lib/portableTextComponents.tsx
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-10 mb-6 border-b-2 border-gray-200 pb-1">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 border-l-4 pl-2 border-blue-500">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => <p className="my-4 leading-7">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-3">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="my-1">{children}</li>,
    number: ({ children }) => <li className="my-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 rounded text-sm">{children}</code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} className="text-blue-600 underline hover:text-blue-800">
        {children}
      </a>
    ),
  },
};
