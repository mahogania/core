import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestCompletionConditionalServiceBase } from "./base/questCompletionConditional.service.base";

@Injectable()
export class QuestCompletionConditionalService extends QuestCompletionConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
