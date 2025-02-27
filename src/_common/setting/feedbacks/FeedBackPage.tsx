import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useMe from "../../../me/hooks/useMe";
import { NavBar } from "../../navigation/ui/HeaderNavigation";
import { Button } from "../../ui/Button";
import { Column } from "../../ui/Column";
import { Layout } from "../../ui/Layout";
import { MainText } from "../../ui/MainText";
import { SizeBox } from "../../ui/SizeBox";
import { SubText } from "../../ui/SubText";
import { useFeedback } from "./useFeedback";

interface FeedbackForm {
  title: string;
  content: string;
  userId?: string;
}

export const FeedBackPage = () => {
  const mutation = useFeedback(); //react hook는 항상 최상위, 함수 안에서 호출 : 컨텍스트 에러
  const { data: user } = useMe();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackForm>();

  const onSubmit = (data: FeedbackForm) => {
    mutation.mutate(
      { title: data.title, content: data.content, userId: user?.id },
      {
        onSuccess() {
          reset();
          toast.success("피드백이 제출되었습니다!"); // 성공 시 토스트 메시지
        },
        onError: (error) => {
          toast.error(`오류: ${error.message}`); // 오류 시 토스트 메시지
        },
      },
    );
  };

  return (
    <Column className="min-h-screen0">
      <NavBar />
      <Layout>
        <Column className="w-full items-center">
          <Column className="mb-6 items-center">
            <MainText className="mt-4 mb-3 text-2xl">
              💡 더 나은 아이디어를 기다려요!
            </MainText>
            <SubText className="px-5">
              ✨ "의견이나 제안을 공유해주세요.
            </SubText>
            <SubText className="px-5">
              여러분의 경험이 큰 변화를 일으킬 수 있어요. ✨
            </SubText>
          </Column>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="title">
                <MainText className="mt-4 mb-2 text-xl">제목</MainText>
              </label>

              <input
                id="title"
                type="text"
                placeholder="제목을 입력해주세요"
                disabled={mutation.isPending}
                {...register("title", { required: "제목은 필수입니다." })}
                className="w-full rounded py-2 focus:outline-none dark:border-b dark:border-gray-600 dark:bg-gray-950 dark:text-white"
              />
              {errors.title && (
                <p className="mt-2 text-red-400">{errors.title.message}</p>
              )}
            </div>
            <SizeBox className="h-8" />
            <div className="mt-4 mb-4">
              <label className="block text-lg" htmlFor="content">
                <MainText className="mb-3 text-xl">
                  개선사항을 적어주세요
                </MainText>
              </label>
              <textarea
                id="content"
                placeholder="개선사항을 적어주세요"
                disabled={mutation.isPending}
                {...register("content", { required: "내용은 필수입니다." })}
                className="w-full rounded border px-4 py-3 focus:outline-none dark:border-gray-600 dark:bg-gray-950 dark:text-white"
                rows={6}
              />
              {errors.content && (
                <p className="mt-2 text-red-400">{errors.content.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="mt-4"
              isLoading={mutation.isPending}
            >
              제출하기
            </Button>
          </form>
        </Column>
      </Layout>
    </Column>
  );
};
