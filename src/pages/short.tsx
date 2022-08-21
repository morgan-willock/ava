import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const UrlShortner: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="text-white">
      Hello World
    </div>
  )
};

export default UrlShortner;
