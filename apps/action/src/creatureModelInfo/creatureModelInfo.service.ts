import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureModelInfoServiceBase } from "./base/creatureModelInfo.service.base";

@Injectable()
export class CreatureModelInfoService extends CreatureModelInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
