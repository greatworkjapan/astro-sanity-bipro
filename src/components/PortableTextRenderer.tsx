// src/components/PortableTextRenderer.tsx
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../lib/portableTextComponents";

interface Props {
  value: any;
}

export default function PortableTextRenderer({ value }: Props) {
  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
