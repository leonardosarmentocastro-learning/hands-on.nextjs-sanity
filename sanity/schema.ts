import { type SchemaTypeDefinition } from 'sanity'
import {
  CTABlockSchema,
  HomePageSchema,
} from '../src/components';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ CTABlockSchema, HomePageSchema ],
}
