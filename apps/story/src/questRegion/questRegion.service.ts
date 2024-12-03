import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRegionServiceBase } from "./base/questRegion.service.base";

@Injectable()
export class QuestRegionService extends QuestRegionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
