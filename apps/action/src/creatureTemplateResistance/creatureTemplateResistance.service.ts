import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateResistanceServiceBase } from "./base/creatureTemplateResistance.service.base";

@Injectable()
export class CreatureTemplateResistanceService extends CreatureTemplateResistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
