import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./Lazy"));

const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('xxxx');
      resolve(11);
    }, 10000);
  });
};

const Demo: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      {/* <Child /> */}
      <LazyComponent />
    </Suspense>
  );
};

export default Demo;

const Child: React.FC = () => {
  mockData()
  return <p>this is data.</p>;
};

const Loading: React.FC = () => {
  return <div>loading...</div>;
};
