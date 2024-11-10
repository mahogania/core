import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateServiceBase } from "./base/creatureTemplate.service.base";

@Injectable()
export class CreatureTemplateService extends CreatureTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
