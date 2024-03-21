import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';

import * as Sentry from '@sentry/react';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <HowItWorks />
    </main>
  );
}

export default Sentry.withProfiler(App);
