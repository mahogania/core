import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScenarioRegionServiceBase } from "./base/scenarioRegion.service.base";

@Injectable()
export class ScenarioRegionService extends ScenarioRegionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
