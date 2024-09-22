import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MillingLootTemplateServiceBase } from "./base/millingLootTemplate.service.base";

@Injectable()
export class MillingLootTemplateService extends MillingLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
