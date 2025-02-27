import { useQuery } from "@tanstack/react-query";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";
import type { IMeService } from "../interfaces/me.service.interface";
import useMe from "./useMe";

export const useMyBookmark = () => {
  const meService = container.get<IMeService>(TYPES.IMeService);
  const { data: user } = useMe();

  return useQuery({
    queryKey: [QueryKeys.myBookmarks],
    queryFn: async () => {
      const content = await meService.getMyBookmarks();
      return content;
    },
    enabled: !!user,
    //새 페이지 진입마다 데이터 갱신이 필요했음.
    //캐싱이 있다면, 누를때마 invalide -> 새로 받는 작업 -> UI 랜더링이 한차례 늦게 반영 -> staleTime 0 으로 설정
    staleTime: 0, 
  });
};
