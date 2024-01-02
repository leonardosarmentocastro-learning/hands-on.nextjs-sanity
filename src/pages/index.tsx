import { useMemo } from 'react';

import { sanityClient } from '../../sanity';
import {
  HomePage,
  HomePageProps,
  query as homePageQuery,
} from '../components/HomePage';

export async function getStaticProps() {
  const queryResult = await sanityClient.fetch(homePageQuery);

  return {
    props: { queryResult },
  };
};

type Props = {
  queryResult: HomePageProps,
};
export default function Home(props: Props & {/* extend type if needed */}) {
  const page = useMemo(() => props.queryResult[0], [ props.queryResult ]);
  const ctaBlocks = useMemo(() => page?.CtaBlocks || [], [ page ]);

  return (
    <HomePage CtaBlocks={ctaBlocks} />
  )
}
