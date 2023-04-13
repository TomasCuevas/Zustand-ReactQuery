import { useQuery } from "@tanstack/react-query";

//* axios instance *//
import { githubApi } from "../api";

const fetchRepos = async () => {
  const { data } = await githubApi.get("/users/TomasCuevas/repos");
  return data;
};

export const useFetchRepositories = () => {
  return useQuery(["repos"], fetchRepos);
};
