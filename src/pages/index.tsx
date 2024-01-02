import { sanityClient } from '../../sanity';
import { CTA, CTAProps, query as ctaQuery } from '../components';

export async function getStaticProps() {
  const CTABlocks = await sanityClient.fetch(ctaQuery);

  return {
    props: { CTABlocks },
  };
};

type Props = { CTABlocks: CTAProps };
export default function Home({ CTABlocks }: Props) {

  return (
    <main className='flex w-screen h-screen bg-white justify-content'>
      <div className='flex flex-row gap-12 w-full justify-center'>
        {CTABlocks.map(c => (
          <CTA key={c._id} {...c} />
        ))}
      </div>
    </main>
  )
}
