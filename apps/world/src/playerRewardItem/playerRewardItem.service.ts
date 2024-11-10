import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerRewardItemServiceBase } from "./base/playerRewardItem.service.base";

@Injectable()
export class PlayerRewardItemService extends PlayerRewardItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
