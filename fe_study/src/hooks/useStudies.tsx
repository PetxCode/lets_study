import { useSelector } from "react-redux";
import useSWR from "swr";
import { getOneUserStudy } from "../api/studyAPI";

export const useStudies = () => {
  const user = useSelector((state: any) => state.user);

  const { data } = useSWR(
    `/read-study/${user?.data._id}`,
    () => {
      return getOneUserStudy(user?.data._id).then((res) => {
        return res;
      });
    },
    { refreshInterval: 5000 }
  );
  return { data };
};
