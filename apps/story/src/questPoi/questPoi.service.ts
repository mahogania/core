import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoiServiceBase } from "./base/questPoi.service.base";

@Injectable()
export class QuestPoiService extends QuestPoiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
