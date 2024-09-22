import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemLootTemplateServiceBase } from "./base/itemLootTemplate.service.base";

@Injectable()
export class ItemLootTemplateService extends ItemLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
