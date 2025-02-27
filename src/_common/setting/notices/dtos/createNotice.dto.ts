export class CreateNoticeDto {
  title: string;
  content: string;
  nickname: string;

  constructor(params: { title: string; content: string; nickname: string }) {
    this.title = params.title;
    this.content = params.content;
    this.nickname = params.nickname;
  }

  toJson(): Record<string, unknown> {
    return {
      title: this.title,
      content: this.content,
      nickname: this.nickname,
    };
  }
}
