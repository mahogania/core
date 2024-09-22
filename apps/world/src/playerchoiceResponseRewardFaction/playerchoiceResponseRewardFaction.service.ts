import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseRewardFactionServiceBase } from "./base/playerchoiceResponseRewardFaction.service.base";

@Injectable()
export class PlayerchoiceResponseRewardFactionService extends PlayerchoiceResponseRewardFactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
