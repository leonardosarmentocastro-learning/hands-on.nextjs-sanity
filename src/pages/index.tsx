import { memo, useContext } from 'react';
import { Inter } from 'next/font/google'

import { CTA } from '../components';
import { Variants } from '../theme';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex w-screen h-screen bg-white justify-content'>
      <div className='flex flex-row gap-12 w-full justify-center'>
        <CTA
          title='Become a PairTree Home Study Provider'
          description='Lorem ipsum sit dolor adpiscing amet dolorum.'
          variant={Variants.Family}
        />

        <CTA
          title='Set up a Call with Us Today'
          description='Schedule a free 30 minute Zoom chat to learn more about PairTree.'
          variant={Variants.Mom}
        />

        <CTA
          title='Create a FREE Listing on PairTree'
          description='Plus your own personalized profile page.'
          variant={Variants.Pro}
        />
      </div>
    </main>
  )
}
