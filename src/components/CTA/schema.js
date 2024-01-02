import { defineField, defineType } from 'sanity';

import { themeVariant } from '../../../sanity';

export const CTABlockSchema = defineType({
  name: 'CTABlock',
  type: 'document',
  title: 'CTABlocks',
  fields: [
    themeVariant,
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'copy',
      type: 'string',
      title: 'Copy',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Link URL',
    }),
  ],
});
