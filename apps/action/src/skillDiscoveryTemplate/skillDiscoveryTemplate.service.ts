import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillDiscoveryTemplateServiceBase } from "./base/skillDiscoveryTemplate.service.base";

@Injectable()
export class SkillDiscoveryTemplateService extends SkillDiscoveryTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
