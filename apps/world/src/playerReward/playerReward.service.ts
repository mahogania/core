import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerRewardServiceBase } from "./base/playerReward.service.base";

@Injectable()
export class PlayerRewardService extends PlayerRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
