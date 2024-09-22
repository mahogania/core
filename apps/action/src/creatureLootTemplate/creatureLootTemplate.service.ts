import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureLootTemplateServiceBase } from "./base/creatureLootTemplate.service.base";

@Injectable()
export class CreatureLootTemplateService extends CreatureLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
