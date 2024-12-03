import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingRuleServiceBase } from "./base/shippingRule.service.base";

@Injectable()
export class ShippingRuleService extends ShippingRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
