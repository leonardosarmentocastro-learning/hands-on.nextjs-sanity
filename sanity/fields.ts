import { defineField } from 'sanity';

export const themeVariant = defineField({
  name: 'variant',
  type: 'string',
  title: 'Layout variant',
  validation: Rule => [ Rule.required() ],
  // https://www.sanity.io/docs/schema-field-types
  options: {
    list: [
      { title: 'Family', value: 'family' },
      { title: 'Pro', value: 'pro' },
      { title: 'Mom', value: 'mom' },
    ],
  }
});
