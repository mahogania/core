import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProspectingLootTemplateServiceBase } from "./base/prospectingLootTemplate.service.base";

@Injectable()
export class ProspectingLootTemplateService extends ProspectingLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
