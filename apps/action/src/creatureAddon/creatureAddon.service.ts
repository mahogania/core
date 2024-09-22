import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureAddonServiceBase } from "./base/creatureAddon.service.base";

@Injectable()
export class CreatureAddonService extends CreatureAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
