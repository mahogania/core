import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillExtraItemTemplateServiceBase } from "./base/skillExtraItemTemplate.service.base";

@Injectable()
export class SkillExtraItemTemplateService extends SkillExtraItemTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
