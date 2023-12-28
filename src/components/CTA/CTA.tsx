import { memo, useContext } from 'react';
import { Inter } from 'next/font/google'

import { Theme, Variants } from '../../theme';
const inter = Inter({ subsets: ['latin'] });

// https://www.figma.com/file/co2v9sMm8hGMDap6zA4Nnm/Site-2023-v1?type=design&node-id=257-493&mode=design&t=NN8nOKkfxakSMP13-0
const CTATheme: Theme = {
  backgroundColor: {
    [Variants.Family]: 'bg-[#44978D]',
    [Variants.Pro]: 'bg-[#006679]',
    [Variants.Mom]: 'bg-[#FA8E73]',
  }
};

type CTAProps = {
  description: string
  title: string
  variant: Variants
};

// https://www.figma.com/file/co2v9sMm8hGMDap6zA4Nnm/Site-2023-v1?type=design&node-id=1148-11466&mode=design&t=NN8nOKkfxakSMP13-0
export const CTA = memo(({
  description,
  title,
  variant,
}: CTAProps) => {
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const backgroundColor = CTATheme.backgroundColor[variant];

  return (
    <div className='flex flex-col max-w-xs text-center'>
      <p className='mb-6 text-3xl font-bold italic'>
        {title}
      </p>

      <p className='mb-12 text-lg text-[#5E5E5E]'>
        {description}
      </p>

      <p className={`flex justify-center items-center h-16 w-16 mx-auto rounded-full ${backgroundColor} text-5xl text-white`}>
        →
      </p>
    </div>
  )
});
