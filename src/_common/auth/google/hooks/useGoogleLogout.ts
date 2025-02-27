import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { queryClient } from "../../../../queryClient";
import { TYPES } from "../../../../shared/constants/types";
import { container } from "../../../../shared/services/container";
import { QueryKeys } from "../../../../shared/utils/queryKeys.enum";
import { IAuthService } from "../../interfaces/auth.service.interface";
import { useAuthStore } from "../../stores/useAuthStore";

const useGoogleLogout = () => {
  const authService = container.get<IAuthService>(TYPES.IAuthService);

  const logout = useMutation({
    mutationFn: async () => {
      await authService.googleLogout();
    },
    onSuccess: () => {
      toast.success("구글 로그아웃 성공");
      useAuthStore.setState({ accessToken: null });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.me] });
    },
  });

  return { logout };
};

export default useGoogleLogout;
