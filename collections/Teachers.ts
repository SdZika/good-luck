import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',
  fields: [
    {
      
      type: 'tabs', // required
      tabs: [
        // required
        {
          label: 'Teacher', // required
          description: 'This will appear within the tab above the fields.',
          fields: [
            // required
            {
              name: 'someTextField',
              type: 'text',
              required: true,
            },
            {
              name: 'image', // Field name
              type: 'upload', // Field type for image upload
              relationTo: 'media', // Relates to the Media collection
              required: false, // Set to true if this field is mandatory
            },
          ],
        },
        {
          name: 'tabTwo',
          label: 'BIO', // required
          interfaceName: 'TabTwo', // optional (`name` must be present)
          fields: [
            // required
            {
              name: 'someOtherTextField', // accessible via tabTwo.numberField
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}