import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FishingLootTemplateServiceBase } from "./base/fishingLootTemplate.service.base";

@Injectable()
export class FishingLootTemplateService extends FishingLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
