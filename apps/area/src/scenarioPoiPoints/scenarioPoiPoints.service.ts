import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScenarioPoiPointsServiceBase } from "./base/scenarioPoiPoints.service.base";

@Injectable()
export class ScenarioPoiPointsService extends ScenarioPoiPointsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
