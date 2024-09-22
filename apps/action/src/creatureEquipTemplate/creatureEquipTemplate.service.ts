import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureEquipTemplateServiceBase } from "./base/creatureEquipTemplate.service.base";

@Injectable()
export class CreatureEquipTemplateService extends CreatureEquipTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
