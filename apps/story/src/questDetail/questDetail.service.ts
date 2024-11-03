import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestDetailServiceBase } from "./base/questDetail.service.base";

@Injectable()
export class QuestDetailService extends QuestDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
