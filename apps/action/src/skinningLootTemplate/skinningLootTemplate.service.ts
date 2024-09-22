import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkinningLootTemplateServiceBase } from "./base/skinningLootTemplate.service.base";

@Injectable()
export class SkinningLootTemplateService extends SkinningLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
