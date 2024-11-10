import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerTemplateServiceBase } from "./base/areaTriggerTemplate.service.base";

@Injectable()
export class AreaTriggerTemplateService extends AreaTriggerTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
