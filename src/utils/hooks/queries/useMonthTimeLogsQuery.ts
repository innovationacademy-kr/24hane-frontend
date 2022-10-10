import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getLogsmonth, InOutLog } from "api/logsAPI";
import { useEffect, useState } from "react";

type useMonthTimeLogsProps = {
  year: number;
  month: number;
  options?: UseQueryOptions;
};

export const useMonthTimeLogsQuery = ({ year, month, options }: useMonthTimeLogsProps) => {
  const [logs, setLogs] = useState<InOutLog[]>([]);
  const { data, ...queryInfo } = useQuery(
    ["timeLogs", year, month],
    () => getLogsmonth(year, month),
    {
      select: ({ data }) => data.inOutLogs,
    },
  );

  useEffect(() => {
    if (data) setLogs(data);
  }, [data]);

  return {
    logs,
    setLogs,
    queryInfo,
  };
};
