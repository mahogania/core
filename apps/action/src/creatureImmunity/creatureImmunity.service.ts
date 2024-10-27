import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureImmunityServiceBase } from "./base/creatureImmunity.service.base";

@Injectable()
export class CreatureImmunityService extends CreatureImmunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
