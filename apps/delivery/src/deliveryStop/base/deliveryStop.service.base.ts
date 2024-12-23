/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DeliveryStop as PrismaDeliveryStop } from "@prisma/client";

export class DeliveryStopServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryStopCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryStop.count(args);
  }

  async deliveryStops(
    args: Prisma.DeliveryStopFindManyArgs
  ): Promise<PrismaDeliveryStop[]> {
    return this.prisma.deliveryStop.findMany(args);
  }
  async deliveryStop(
    args: Prisma.DeliveryStopFindUniqueArgs
  ): Promise<PrismaDeliveryStop | null> {
    return this.prisma.deliveryStop.findUnique(args);
  }
  async createDeliveryStop(
    args: Prisma.DeliveryStopCreateArgs
  ): Promise<PrismaDeliveryStop> {
    return this.prisma.deliveryStop.create(args);
  }
  async updateDeliveryStop(
    args: Prisma.DeliveryStopUpdateArgs
  ): Promise<PrismaDeliveryStop> {
    return this.prisma.deliveryStop.update(args);
  }
  async deleteDeliveryStop(
    args: Prisma.DeliveryStopDeleteArgs
  ): Promise<PrismaDeliveryStop> {
    return this.prisma.deliveryStop.delete(args);
  }
}
