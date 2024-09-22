import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillPerfectItemTemplateServiceBase } from "./base/skillPerfectItemTemplate.service.base";

@Injectable()
export class SkillPerfectItemTemplateService extends SkillPerfectItemTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
