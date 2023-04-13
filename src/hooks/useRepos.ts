import { useQuery } from "@tanstack/react-query";

//* interface *//
import { IRepository } from "../interfaces";

//* axios instance *//
import { githubApi } from "../api";

const fetchRepos = async () => {
  const { data } = await githubApi.get<IRepository[]>(
    "/users/TomasCuevas/repos"
  );
  return data;
};

export const useFetchRepositories = () => {
  return useQuery(["repos"], fetchRepos);
};
