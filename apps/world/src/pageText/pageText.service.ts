import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageTextServiceBase } from "./base/pageText.service.base";

@Injectable()
export class PageTextService extends PageTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
