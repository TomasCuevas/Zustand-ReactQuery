import create from "zustand";

interface IFavoriteReposState {
  favoriteReposIds: number[];
  addFavoriteRepo(id: number): void;
  removeFavoriteRepo(id: number): void;
}

export const useFavoriteReposStore = create<IFavoriteReposState>((set) => ({
  favoriteReposIds: [],
  addFavoriteRepo: (id: number) => {
    set((state) => ({
      favoriteReposIds: [...state.favoriteReposIds, id],
    }));
  },
  removeFavoriteRepo: (id: number) => {
    set((state) => ({
      favoriteReposIds: state.favoriteReposIds.filter(
        (repoId) => repoId !== id
      ),
    }));
  },
}));
