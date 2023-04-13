//* hook *//
import { useFetchRepositories } from "./hooks";

//* components *//
import { Card } from "./components";

export const App = () => {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((repository) => (
        <Card repository={repository} key={repository.id} />
      ))}
    </div>
  );
};
