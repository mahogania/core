import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingRuleCountryServiceBase } from "./base/shippingRuleCountry.service.base";

@Injectable()
export class ShippingRuleCountryService extends ShippingRuleCountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
