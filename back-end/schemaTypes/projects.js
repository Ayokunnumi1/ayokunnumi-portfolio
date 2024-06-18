export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'image', type: 'image', title: 'Image'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'technologies', type: 'array', of: [{type: 'string'}], title: 'Technologies'},
    {name: 'liveLink', type: 'url', title: 'Live Link'},
    {name: 'sourceLink', type: 'url', title: 'Source Link'},
    {name: 'video', type: 'url', title: 'Video'},
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'date_of_creation', type: 'string', title: 'Date of Creation'},
  ],
}
