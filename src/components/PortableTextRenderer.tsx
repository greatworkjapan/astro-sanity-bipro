import React from "react";
import { PortableText } from "@portabletext/react";

/**
 * Sanity の PortableText を React で描画するコンポーネント
 * Tailwind Typography の .prose クラスを適用する
 */
export default function PortableTextRenderer({ value }) {
  if (!value) return null;

  return (
    <div className="prose max-w-none">
      <PortableText
        value={value}
        components={{
          types: {
            image: ({ value }) => (
              <figure>
                <img
                  src={value?.asset?.url}
                  alt={value?.alt || ""}
                  className="rounded-lg border"
                />
                {value?.caption && (
                  <figcaption className="text-sm text-gray-500">
                    {value.caption}
                  </figcaption>
                )}
              </figure>
            ),
          },
          marks: {
            link: ({ value, children }) => (
              <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {children}
              </a>
            ),
          },
        }}
      />
    </div>
  );
}
