//* hook *//
import { useFetchRepositories } from "./hooks";

export const App = () => {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) return <div>Loading...</div>;

  return <div>Hello Word</div>;
};
