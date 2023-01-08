import { useRouter } from "next/router";
import Filters from "./Filters";
import SearchResult from "./SearchResult";
import Divider from "components/Divider";

const Search: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Filters />
      <Divider />
      <SearchResult />
    </div>
  );
};

export default Search;
