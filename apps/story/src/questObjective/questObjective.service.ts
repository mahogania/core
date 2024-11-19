import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectiveServiceBase } from "./base/questObjective.service.base";

@Injectable()
export class QuestObjectiveService extends QuestObjectiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
