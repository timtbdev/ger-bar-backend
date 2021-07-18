import { IoFastFoodSharp as Icon } from "react-icons/io";

export default {
  name: 'snacks',
  title: 'Snacks',
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
