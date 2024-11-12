import { Suspense } from 'react';

export default function Custom404() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1 style={{ textAlign: 'center' }}>
        404 - Sorry this page is still in development
      </h1>
    </Suspense>
  );
}
