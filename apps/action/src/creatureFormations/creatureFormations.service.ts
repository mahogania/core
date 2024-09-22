import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureFormationsServiceBase } from "./base/creatureFormations.service.base";

@Injectable()
export class CreatureFormationsService extends CreatureFormationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
