import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesInvoicePaymentServiceBase } from "./base/salesInvoicePayment.service.base";

@Injectable()
export class SalesInvoicePaymentService extends SalesInvoicePaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
