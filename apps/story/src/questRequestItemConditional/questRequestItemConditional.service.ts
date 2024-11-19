import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRequestItemConditionalServiceBase } from "./base/questRequestItemConditional.service.base";

@Injectable()
export class QuestRequestItemConditionalService extends QuestRequestItemConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
