import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureQuestEnderServiceBase } from "./base/creatureQuestEnder.service.base";

@Injectable()
export class CreatureQuestEnderService extends CreatureQuestEnderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
