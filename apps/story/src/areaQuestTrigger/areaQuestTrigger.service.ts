import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaQuestTriggerServiceBase } from "./base/areaQuestTrigger.service.base";

@Injectable()
export class AreaQuestTriggerService extends AreaQuestTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
