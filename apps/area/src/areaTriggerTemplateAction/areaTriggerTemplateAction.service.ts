import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerTemplateActionServiceBase } from "./base/areaTriggerTemplateAction.service.base";

@Injectable()
export class AreaTriggerTemplateActionService extends AreaTriggerTemplateActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
