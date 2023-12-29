import { memo, useContext } from 'react';
import { Inter } from 'next/font/google';
import { createClient } from 'next-sanity';

import { CTA, CTABlockSchema } from '../components';
import { Variants } from '../theme';
import { apiVersion, dataset, projectId } from '../../sanity/env';

const inter = Inter({ subsets: ['latin'] });

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function getStaticProps() {
  const CTABlocks = await client.fetch(`*[_type == "${CTABlockSchema.name}"]`);

  return {
    props: { CTABlocks },
  };
};

type Props = {
  CTABlocks: any[] // TODO: groqd
};
export default function Home({ CTABlocks }: Props) {
  return (
    <main className='flex w-screen h-screen bg-white justify-content'>
      <div className='flex flex-row gap-12 w-full justify-center'>
        {CTABlocks.map(c => (
          <CTA
            key={c._id}
            description={c.copy}
            title={c.heading}
            url={c.url}
            variant={c.variant}
          />
        ))}
      </div>
    </main>
  )
}
