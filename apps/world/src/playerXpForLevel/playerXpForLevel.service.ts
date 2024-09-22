import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerXpForLevelServiceBase } from "./base/playerXpForLevel.service.base";

@Injectable()
export class PlayerXpForLevelService extends PlayerXpForLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
