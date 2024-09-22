import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureMovementOverrideServiceBase } from "./base/creatureMovementOverride.service.base";

@Injectable()
export class CreatureMovementOverrideService extends CreatureMovementOverrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
