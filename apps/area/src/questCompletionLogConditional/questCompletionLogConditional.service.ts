import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestCompletionLogConditionalServiceBase } from "./base/questCompletionLogConditional.service.base";

@Injectable()
export class QuestCompletionLogConditionalService extends QuestCompletionLogConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
