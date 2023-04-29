import dynamic from "next/dynamic";
import { Suspense } from "react";

const Index = () => {
  const DynamicIndex = dynamic(
    () => import("../dynamicpages/index").then((res) => res.default),
    {
      ssr: false,
    }
  );
  
  
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicIndex />
      </Suspense>
    </div>
  );
};

export default Index;

