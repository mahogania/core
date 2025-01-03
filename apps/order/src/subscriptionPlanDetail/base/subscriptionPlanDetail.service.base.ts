/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SubscriptionPlanDetail as PrismaSubscriptionPlanDetail,
} from "@prisma/client";

export class SubscriptionPlanDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubscriptionPlanDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subscriptionPlanDetail.count(args);
  }

  async subscriptionPlanDetails(
    args: Prisma.SubscriptionPlanDetailFindManyArgs
  ): Promise<PrismaSubscriptionPlanDetail[]> {
    return this.prisma.subscriptionPlanDetail.findMany(args);
  }
  async subscriptionPlanDetail(
    args: Prisma.SubscriptionPlanDetailFindUniqueArgs
  ): Promise<PrismaSubscriptionPlanDetail | null> {
    return this.prisma.subscriptionPlanDetail.findUnique(args);
  }
  async createSubscriptionPlanDetail(
    args: Prisma.SubscriptionPlanDetailCreateArgs
  ): Promise<PrismaSubscriptionPlanDetail> {
    return this.prisma.subscriptionPlanDetail.create(args);
  }
  async updateSubscriptionPlanDetail(
    args: Prisma.SubscriptionPlanDetailUpdateArgs
  ): Promise<PrismaSubscriptionPlanDetail> {
    return this.prisma.subscriptionPlanDetail.update(args);
  }
  async deleteSubscriptionPlanDetail(
    args: Prisma.SubscriptionPlanDetailDeleteArgs
  ): Promise<PrismaSubscriptionPlanDetail> {
    return this.prisma.subscriptionPlanDetail.delete(args);
  }
}
