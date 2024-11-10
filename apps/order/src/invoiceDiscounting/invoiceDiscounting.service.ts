import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceDiscountingServiceBase } from "./base/invoiceDiscounting.service.base";

@Injectable()
export class InvoiceDiscountingService extends InvoiceDiscountingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
