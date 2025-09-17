import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "bodyHtml",
      title: "Body (HTML)",
      type: "text",
      options: { language: "html" },
      hidden: ({ parent }) => parent?.editorMode !== "html",
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "検索結果に表示されるタイトル（推奨 60文字以内）",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "検索結果に表示される説明文（推奨 120〜160文字）",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "editorMode",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle === "html" ? "HTML Mode" : "Rich Text Mode",
      };
    },
  },
});
