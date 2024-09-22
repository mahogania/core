import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateAddonServiceBase } from "./base/creatureTemplateAddon.service.base";

@Injectable()
export class CreatureTemplateAddonService extends CreatureTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
