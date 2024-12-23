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
  PosPaymentMethod as PrismaPosPaymentMethod,
} from "@prisma/client";

export class PosPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PosPaymentMethodCountArgs, "select">
  ): Promise<number> {
    return this.prisma.posPaymentMethod.count(args);
  }

  async posPaymentMethods(
    args: Prisma.PosPaymentMethodFindManyArgs
  ): Promise<PrismaPosPaymentMethod[]> {
    return this.prisma.posPaymentMethod.findMany(args);
  }
  async posPaymentMethod(
    args: Prisma.PosPaymentMethodFindUniqueArgs
  ): Promise<PrismaPosPaymentMethod | null> {
    return this.prisma.posPaymentMethod.findUnique(args);
  }
  async createPosPaymentMethod(
    args: Prisma.PosPaymentMethodCreateArgs
  ): Promise<PrismaPosPaymentMethod> {
    return this.prisma.posPaymentMethod.create(args);
  }
  async updatePosPaymentMethod(
    args: Prisma.PosPaymentMethodUpdateArgs
  ): Promise<PrismaPosPaymentMethod> {
    return this.prisma.posPaymentMethod.update(args);
  }
  async deletePosPaymentMethod(
    args: Prisma.PosPaymentMethodDeleteArgs
  ): Promise<PrismaPosPaymentMethod> {
    return this.prisma.posPaymentMethod.delete(args);
  }
}
