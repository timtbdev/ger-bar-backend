import { FaWineGlassAlt as Icon } from "react-icons/fa";

export default {
  name: 'wine',
  title: 'Wine',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "glass",
      title: "Price (Glass)",
      type: "string",
    },
    {
        name: "bottle",
        title: "Price (Bottle)",
        type: "string",
      },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
    orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
