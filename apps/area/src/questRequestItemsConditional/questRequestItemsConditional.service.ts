import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRequestItemsConditionalServiceBase } from "./base/questRequestItemsConditional.service.base";

@Injectable()
export class QuestRequestItemsConditionalService extends QuestRequestItemsConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
