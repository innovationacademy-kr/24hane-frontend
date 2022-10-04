import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getAccumulationTimes } from "api/userAPI";

export const useMainAccTimesQuery = (options?: UseQueryOptions) => {
  return useQuery(["accTimes"], getAccumulationTimes, { select: ({ data }) => data });
};
