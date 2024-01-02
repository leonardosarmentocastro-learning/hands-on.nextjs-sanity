import { memo, useMemo } from 'react';
import { InferType, TypeFromSelection } from 'groqd';

import { Theme, Variants } from '../../theme';
import { schema, selection } from './query';

// https://www.figma.com/file/co2v9sMm8hGMDap6zA4Nnm/Site-2023-v1?type=design&node-id=257-493&mode=design&t=NN8nOKkfxakSMP13-0
const CTATheme: Theme = {
  backgroundColor: {
    [Variants.Family]: 'bg-[#44978D]',
    [Variants.Pro]: 'bg-[#006679]',
    [Variants.Mom]: 'bg-[#FA8E73]',
  }
};


// https://www.figma.com/file/co2v9sMm8hGMDap6zA4Nnm/Site-2023-v1?type=design&node-id=1148-11466&mode=design&t=NN8nOKkfxakSMP13-0
type Props = TypeFromSelection<typeof selection>;
export type CTAProps = InferType<typeof schema>;
export const CTA = memo(({
  heading,
  copy,
  url,
  variant,
}: Props) => {
  const backgroundColor = useMemo(
    () => CTATheme.backgroundColor[variant], // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    [ variant ]
  );

  return (
    <div className='flex flex-col max-w-xs text-center'>
      <p className='mb-6 text-3xl font-bold italic'>
        {heading}
      </p>

      <p className='mb-12 text-lg text-[#5E5E5E]'>
        {copy}
      </p>

      <a
        className={`flex justify-center items-center h-16 w-16 mx-auto rounded-full ${backgroundColor} text-5xl text-white`}
        href={url}
        target='_blank'
      >
        →
      </a>
    </div>
  )
});
