import { q, Selection } from 'groqd';

import { HomePageSchema } from './schema';
import { selection as ctaSelection } from '../CTA';

// https://formidable.com/open-source/groqd/utility-types#typefromselection
export const selection = {
  CtaBlocks: q.array(q.object(ctaSelection)),
} satisfies Selection;

export const { query, schema } = q('*', { isArray: false }) // `*[_type == "${HomePageSchema.name}"]`
  .filter(`_type == "${HomePageSchema.name}"`)
  .grab(selection);
