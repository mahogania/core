import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseRewardCurrencyServiceBase } from "./base/playerchoiceResponseRewardCurrency.service.base";

@Injectable()
export class PlayerchoiceResponseRewardCurrencyService extends PlayerchoiceResponseRewardCurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
