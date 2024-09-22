import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildRewardsServiceBase } from "./base/guildRewards.service.base";

@Injectable()
export class GuildRewardsService extends GuildRewardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
