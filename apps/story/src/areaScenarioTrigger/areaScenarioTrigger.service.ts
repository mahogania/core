import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaScenarioTriggerServiceBase } from "./base/areaScenarioTrigger.service.base";

@Injectable()
export class AreaScenarioTriggerService extends AreaScenarioTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
