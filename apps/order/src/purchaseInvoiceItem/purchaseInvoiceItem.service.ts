import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseInvoiceItemServiceBase } from "./base/purchaseInvoiceItem.service.base";

@Injectable()
export class PurchaseInvoiceItemService extends PurchaseInvoiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
