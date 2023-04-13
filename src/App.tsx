//* hook *//
import { useFetchRepositories } from "./hooks";

//* components *//
import { Card } from "./components";

//* store *//
import { useFavoriteReposStore } from "./store";

export const App = () => {
  const { data, isLoading } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
};
