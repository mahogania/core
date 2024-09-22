import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectivesServiceBase } from "./base/questObjectives.service.base";

@Injectable()
export class QuestObjectivesService extends QuestObjectivesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
