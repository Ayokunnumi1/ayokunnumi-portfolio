export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
    {name: 'description', type: 'text', title: 'Description'},
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string', name: 'technology', title: 'Technology'}],
    },
    {name: 'liveLink', type: 'string', title: 'Live Link'},
    {name: 'sourceLink', type: 'string', title: 'Source Link'},
    {name: 'video', type: 'file', title: 'My Video'},
    {name: 'title', type: 'string', title: 'Title'},
    {
      name: 'date_of_creation',
      type: 'string',
      title: 'Date of Creation',
      validation: Rule => Rule.regex(/^\d{4}$/, {
        name: 'year',
        invert: false
      }).error('Please enter a valid year in the format YYYY')
    },
  ],
}
