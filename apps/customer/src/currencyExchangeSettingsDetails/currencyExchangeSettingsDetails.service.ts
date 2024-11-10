import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurrencyExchangeSettingsDetailsServiceBase } from "./base/currencyExchangeSettingsDetails.service.base";

@Injectable()
export class CurrencyExchangeSettingsDetailsService extends CurrencyExchangeSettingsDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
