import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureQuestItemServiceBase } from "./base/creatureQuestItem.service.base";

@Injectable()
export class CreatureQuestItemService extends CreatureQuestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
