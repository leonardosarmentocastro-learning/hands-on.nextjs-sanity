import { defineField, defineType } from 'sanity';

import { CTABlockSchema } from '../CTA';

export const HomePageSchema = defineType({
  name: 'HomePageSchema',
  type: 'document',
  title: 'HomePage schema',
  fields: [
    defineField({
      of: [{ type: CTABlockSchema.name }],
      name: 'CtaBlocks',
      type: 'array',
      title: 'CTA blocks',
    }),
  ],
});
