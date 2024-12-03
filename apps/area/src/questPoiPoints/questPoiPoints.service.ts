import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoiPointsServiceBase } from "./base/questPoiPoints.service.base";

@Injectable()
export class QuestPoiPointsService extends QuestPoiPointsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
