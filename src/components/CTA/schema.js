import { defineType } from 'sanity';

export const CTABlockSchema = {
  name: 'CTABlock',
  type: 'document',
  title: 'CTABlocks',
  fields: [{
    name: 'heading',
    type: 'string',
    title: 'Heading',
  }, {
    name: 'copy',
    type: 'string',
    title: 'Copy',
  }, {
    name: 'url',
    type: 'string',
    title: 'Link URL',
  }, {
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
      // isHighlighted: true,
    }
  }],
};
