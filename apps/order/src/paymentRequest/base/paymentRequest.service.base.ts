/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PaymentRequest as PrismaPaymentRequest } from "@prisma/client";

export class PaymentRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentRequest.count(args);
  }

  async paymentRequests(
    args: Prisma.PaymentRequestFindManyArgs
  ): Promise<PrismaPaymentRequest[]> {
    return this.prisma.paymentRequest.findMany(args);
  }
  async paymentRequest(
    args: Prisma.PaymentRequestFindUniqueArgs
  ): Promise<PrismaPaymentRequest | null> {
    return this.prisma.paymentRequest.findUnique(args);
  }
  async createPaymentRequest(
    args: Prisma.PaymentRequestCreateArgs
  ): Promise<PrismaPaymentRequest> {
    return this.prisma.paymentRequest.create(args);
  }
  async updatePaymentRequest(
    args: Prisma.PaymentRequestUpdateArgs
  ): Promise<PrismaPaymentRequest> {
    return this.prisma.paymentRequest.update(args);
  }
  async deletePaymentRequest(
    args: Prisma.PaymentRequestDeleteArgs
  ): Promise<PrismaPaymentRequest> {
    return this.prisma.paymentRequest.delete(args);
  }
}
