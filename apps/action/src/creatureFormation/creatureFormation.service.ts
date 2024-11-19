import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureFormationServiceBase } from "./base/creatureFormation.service.base";

@Injectable()
export class CreatureFormationService extends CreatureFormationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
