import { NoticeHistoryEntity } from "../entities/noticeHistory.entity";

export class NoticeHistoryDto {
  id: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: Date;
  status: boolean;

  constructor(params: {
    id: number;
    title: string;
    content: string;
    nickname: string;
    createdAt: Date;
    status: boolean;
  }) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.nickname = params.nickname;
    this.createdAt = params.createdAt;
    this.status = params.status;
  }

  static fromJson(json: Record<string, unknown>): NoticeHistoryDto {
    return new NoticeHistoryDto({
      id: (json.id as number) || 0,
      title: (json.title as string) || "",
      content: (json.content as string) || "",
      nickname: (json.nickname as string) || "",
      createdAt: (json.createdAt as Date) || new Date(),
      status: (json.status as boolean) || false,
    });
  }

  toDomain(): NoticeHistoryEntity {
    return new NoticeHistoryEntity({
      id: this.id,
      title: this.title,
      content: this.content,
      nickname: this.nickname,
      createdAt: this.createdAt,
      status: this.status,
    });
  }
}
