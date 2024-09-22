import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureImmunitiesServiceBase } from "./base/creatureImmunities.service.base";

@Injectable()
export class CreatureImmunitiesService extends CreatureImmunitiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
