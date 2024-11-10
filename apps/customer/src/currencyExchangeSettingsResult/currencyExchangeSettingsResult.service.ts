import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurrencyExchangeSettingsResultServiceBase } from "./base/currencyExchangeSettingsResult.service.base";

@Injectable()
export class CurrencyExchangeSettingsResultService extends CurrencyExchangeSettingsResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
