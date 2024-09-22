import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseRewardItemChoiceServiceBase } from "./base/playerchoiceResponseRewardItemChoice.service.base";

@Injectable()
export class PlayerchoiceResponseRewardItemChoiceService extends PlayerchoiceResponseRewardItemChoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
