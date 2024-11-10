import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParagraphLocaleServiceBase } from "./base/paragraphLocale.service.base";

@Injectable()
export class ParagraphLocaleService extends ParagraphLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
