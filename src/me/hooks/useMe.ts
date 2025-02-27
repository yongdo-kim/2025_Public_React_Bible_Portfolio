import { useQuery } from "@tanstack/react-query";
import { IAuthService } from "../../_common/auth/interfaces/auth.service.interface";
import { UserEntity } from "../../_common/users/entities/user.entity";
import { NariError } from "../../_common/utils/error/error";
import { ErrorEnum } from "../../_common/utils/error/error.enum";
import { queryClient } from "../../queryClient";
import { TYPES } from "../../shared/constants/types";
import { container } from "../../shared/services/container";
import { QueryKeys } from "../../shared/utils/queryKeys.enum";

//로그인 정보를 가져오기
const useMe = () => {
  const authService = container.get<IAuthService>(TYPES.IAuthService);

  //tryCatch를 하지 않느다면, throwOnError가 이 작업을 진행한다.
  //enabled를 쓰고 싶지만, 하드새로고침 -> 토큰 없음 -> 리프레시 부르는 call조차 안함 문제가 있음.
  return useQuery({
    queryKey: [QueryKeys.me],
    queryFn: async () => {
      const user = await authService.getMe();
      return user;
    },
    throwOnError(error, _) {
      if (
        error instanceof NariError &&
        error.errorCode === ErrorEnum.NEED_TO_LOGIN
      ) {
        queryClient.setQueryData<UserEntity | null>([QueryKeys.me], null);
      }
      //더 에러전파 안함.
      return false;
    },
    retry(_, error) {
      if (
        error instanceof NariError &&
        error.errorCode === ErrorEnum.NEED_TO_LOGIN
      ) {
        return false;
      }
      return true;
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });
};

export default useMe;
