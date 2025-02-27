import { useQuery } from "@tanstack/react-query";
import { CommonQueryKeysEnum } from "../../utils/commonQueryKeys.enum";
import { getHttp } from "../../utils/https/https";

//간단한 부분에서는 repo, service, entity, dto는 생략하기로 했음.
export const useVersion = () => {
  return useQuery({
    queryKey: [CommonQueryKeysEnum.version],
    queryFn: async () => {
      const endpoint = `/versions`;
      try {
        const { data } = await getHttp({ url: endpoint });
        return data;
      } catch (e) {
        throw e;
      }
    },
  });
};
