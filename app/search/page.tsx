import SearchPage from "@/components/search-page";
import { Suspense } from "react";
import Loading from "./loading";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SearchPage />
    </Suspense>
  );
};

export default Page;