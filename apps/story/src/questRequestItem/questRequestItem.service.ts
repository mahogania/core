import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRequestItemServiceBase } from "./base/questRequestItem.service.base";

@Injectable()
export class QuestRequestItemService extends QuestRequestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
