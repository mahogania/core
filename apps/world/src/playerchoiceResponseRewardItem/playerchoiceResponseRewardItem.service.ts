import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseRewardItemServiceBase } from "./base/playerchoiceResponseRewardItem.service.base";

@Injectable()
export class PlayerchoiceResponseRewardItemService extends PlayerchoiceResponseRewardItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
