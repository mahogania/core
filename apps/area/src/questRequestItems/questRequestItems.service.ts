import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRequestItemsServiceBase } from "./base/questRequestItems.service.base";

@Injectable()
export class QuestRequestItemsService extends QuestRequestItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
