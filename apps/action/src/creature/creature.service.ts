import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureServiceBase } from "./base/creature.service.base";

@Injectable()
export class CreatureService extends CreatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
