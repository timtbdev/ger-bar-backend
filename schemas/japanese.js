import { RiAncientGateLine as Icon } from "react-icons/ri";

export default {
  name: 'japanese',
  title: 'Japanese Beers',
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
      title: 'Imported from Japan',
      name: 'imported',
      type: 'boolean'  
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      initialValue: {
        imported: false,
      },
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
      media: 'logo',
    },
  },
}
