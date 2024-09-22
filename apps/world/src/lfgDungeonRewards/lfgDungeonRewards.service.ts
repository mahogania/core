import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LfgDungeonRewardsServiceBase } from "./base/lfgDungeonRewards.service.base";

@Injectable()
export class LfgDungeonRewardsService extends LfgDungeonRewardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
