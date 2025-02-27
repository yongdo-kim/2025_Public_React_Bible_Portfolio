import { Container } from "inversify";
import type { IAuthRepository } from "../../_common/auth/interfaces/auth.repository.interface";
import type { IAuthService } from "../../_common/auth/interfaces/auth.service.interface";
import AuthRepository from "../../_common/auth/repositories/auth.repository";
import AuthService from "../../_common/auth/services/auth.service";
import { IBookmarkRepository } from "../../bookmark/interfaces/bookmark.repository.interface";
import { IBookmarkService } from "../../bookmark/interfaces/bookmark.service.interface";
import BookmarkRepository from "../../bookmark/repositories/bookmarkRepository";
import BookmarkService from "../../bookmark/services/bookmark.service";
import { IBookRepository } from "../../books/interfaces/book.repository.interface";
import { IBookService } from "../../books/interfaces/book.service.interface";
import BookRepository from "../../books/repositories/book.repository";
import BookService from "../../books/services/book.service";
import { IContentRepository } from "../../contents/interfaces/content.repository.interface";
import { IContentService } from "../../contents/interfaces/content.service.interface";
import ContentRepository from "../../contents/repositories/content.repository";
import ContentService from "../../contents/services/content.service";
import type { IMeRepository } from "../../me/interfaces/me.repository.interface";
import type { IMeService } from "../../me/interfaces/me.service.interface";
import MeRepository from "../../me/repositories/me.repository";
import MeService from "../../me/services/me.service";
import { TYPES } from "../constants/types";

const container = new Container();

//각 의존된걸 찾는다.
container
  .bind<IBookRepository>(TYPES.IBookRepository)
  .to(BookRepository)
  .inSingletonScope();
container
  .bind<IBookService>(TYPES.IBookService)
  .to(BookService)
  .inSingletonScope();
container
  .bind<IContentRepository>(TYPES.IContentRepository)
  .to(ContentRepository)
  .inSingletonScope();
container
  .bind<IContentService>(TYPES.IContentService)
  .to(ContentService)
  .inSingletonScope();
container
  .bind<IBookmarkRepository>(TYPES.IBookmarkRepository)
  .to(BookmarkRepository)
  .inSingletonScope();
container
  .bind<IBookmarkService>(TYPES.IBookmarkService)
  .to(BookmarkService)
  .inSingletonScope();
container.bind<IMeService>(TYPES.IMeService).to(MeService);
container.bind<IMeRepository>(TYPES.IMeRepository).to(MeRepository);
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);
container.bind<IAuthRepository>(TYPES.IAuthRepository).to(AuthRepository);
export { container };
