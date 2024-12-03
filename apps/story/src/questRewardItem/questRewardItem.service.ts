import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRewardItemServiceBase } from "./base/questRewardItem.service.base";

@Injectable()
export class QuestRewardItemService extends QuestRewardItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
