import { memo } from 'react';
import { InferType, TypeFromSelection } from 'groqd';

import { selection, schema } from './query';
import { CTA } from '../CTA';

type Props = TypeFromSelection<typeof selection>;
export type HomePageProps = InferType<typeof schema>;
export const HomePage = memo(({
  CtaBlocks,
}: Props) => {

  return (
    <main className='flex w-screen h-screen bg-white justify-content'>
      <div className='flex flex-row gap-12 w-full justify-center'>
        {CtaBlocks.map(cb => (
          <CTA key={cb._id} {...cb} />
        ))}
      </div>
    </main>
  );
});
