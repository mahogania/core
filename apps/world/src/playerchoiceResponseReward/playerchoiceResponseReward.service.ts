import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseRewardServiceBase } from "./base/playerchoiceResponseReward.service.base";

@Injectable()
export class PlayerchoiceResponseRewardService extends PlayerchoiceResponseRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
