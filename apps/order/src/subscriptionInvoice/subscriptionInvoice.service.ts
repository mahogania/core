import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionInvoiceServiceBase } from "./base/subscriptionInvoice.service.base";

@Injectable()
export class SubscriptionInvoiceService extends SubscriptionInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
