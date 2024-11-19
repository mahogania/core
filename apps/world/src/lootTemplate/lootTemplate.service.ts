import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LootTemplateServiceBase } from "./base/lootTemplate.service.base";

@Injectable()
export class LootTemplateService extends LootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
