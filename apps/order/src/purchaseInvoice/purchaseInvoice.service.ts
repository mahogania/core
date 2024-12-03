import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseInvoiceServiceBase } from "./base/purchaseInvoice.service.base";

@Injectable()
export class PurchaseInvoiceService extends PurchaseInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
