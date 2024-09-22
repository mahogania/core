import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateMovementServiceBase } from "./base/creatureTemplateMovement.service.base";

@Injectable()
export class CreatureTemplateMovementService extends CreatureTemplateMovementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
