import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerClasslevelstatsServiceBase } from "./base/playerClasslevelstats.service.base";

@Injectable()
export class PlayerClasslevelstatsService extends PlayerClasslevelstatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
