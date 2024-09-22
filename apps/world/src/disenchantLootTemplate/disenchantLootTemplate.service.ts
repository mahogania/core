import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DisenchantLootTemplateServiceBase } from "./base/disenchantLootTemplate.service.base";

@Injectable()
export class DisenchantLootTemplateService extends DisenchantLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
