import { q, Selection } from 'groqd';
import { z } from 'zod';

import { CTABlockSchema } from './schema';
import { Variants } from '../../theme';

// https://formidable.com/open-source/groqd/utility-types#typefromselection
export const selection = {
  _id: q.string(),
  heading: q.string(),
  copy: q.string(),
  url: q.string(),
  variant: z.nativeEnum(Variants)
} satisfies Selection;

export const { query, schema } = q('*', { isArray: true }) // `*[_type == "${CTABlockSchema.name}"]`
  .filter(`_type == "${CTABlockSchema.name}"`)
  .grab(selection);
