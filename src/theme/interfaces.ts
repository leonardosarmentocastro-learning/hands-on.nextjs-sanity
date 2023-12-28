import { Variants } from './enums';

export interface Theme {
  backgroundColor: {
    [Variants.Family]: string
    [Variants.Pro]: string
    [Variants.Mom]: string
  },
};
