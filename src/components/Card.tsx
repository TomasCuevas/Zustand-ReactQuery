//* store *//
import { useFavoriteReposStore } from "../store";

//* interfaces *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
  isFavorite: boolean;
}

export const Card: React.FC<Props> = ({ repository, isFavorite }) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  return (
    <div>
      <h2>{repository.name}</h2>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};
