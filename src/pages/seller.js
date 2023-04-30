import dynamic from "next/dynamic";
import { Suspense } from "react";

const Seller = () => {
  const DynamicIndex = dynamic(
    () => import("../dynamicpages/seller").then((res) => res.default),
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

export default Seller;

