import IntroView from './views/home/intro/intro.view';
import Advantage from './views/home/advantage/advantage.view';
import Promise from './views/home/promise/promise.view';
import Trust from './views/home/trust/trust.view';
import LineUp from './views/home/lineup/lineup.view';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <IntroView />
        <Advantage />
        <Promise />
        <Trust />
        <LineUp />
      </div>
    </Suspense>
  );
}
