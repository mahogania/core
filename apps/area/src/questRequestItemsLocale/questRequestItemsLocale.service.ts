import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRequestItemsLocaleServiceBase } from "./base/questRequestItemsLocale.service.base";

@Injectable()
export class QuestRequestItemsLocaleService extends QuestRequestItemsLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
