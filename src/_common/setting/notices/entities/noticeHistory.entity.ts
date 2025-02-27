export class NoticeHistoryEntity {
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
}
