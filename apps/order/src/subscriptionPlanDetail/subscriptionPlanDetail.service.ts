import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionPlanDetailServiceBase } from "./base/subscriptionPlanDetail.service.base";

@Injectable()
export class SubscriptionPlanDetailService extends SubscriptionPlanDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
