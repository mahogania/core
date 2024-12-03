import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingRuleConditionServiceBase } from "./base/shippingRuleCondition.service.base";

@Injectable()
export class ShippingRuleConditionService extends ShippingRuleConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
