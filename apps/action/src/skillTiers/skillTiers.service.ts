import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillTiersServiceBase } from "./base/skillTiers.service.base";

@Injectable()
export class SkillTiersService extends SkillTiersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
