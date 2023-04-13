//* interfaces *//
import { IRepository } from "../interfaces";

interface Props {
  repository: IRepository;
}

export const Card: React.FC<Props> = ({ repository }) => {
  return (
    <div>
      <h2>{repository.name}</h2>
      <button>Like</button>
    </div>
  );
};
