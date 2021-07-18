import { BiDrink as Icon } from "react-icons/bi";

export default {
  name: 'other',
  title: 'Other drinks',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: "alcohol",
      title: "Alcohol Content (by volume)",
      type: "string",
    },
    {
      name: "size",
      title: "size",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
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
