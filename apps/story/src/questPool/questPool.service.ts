import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoolServiceBase } from "./base/questPool.service.base";

@Injectable()
export class QuestPoolService extends QuestPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
