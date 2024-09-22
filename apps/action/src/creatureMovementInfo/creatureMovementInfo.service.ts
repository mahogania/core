import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureMovementInfoServiceBase } from "./base/creatureMovementInfo.service.base";

@Injectable()
export class CreatureMovementInfoService extends CreatureMovementInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
