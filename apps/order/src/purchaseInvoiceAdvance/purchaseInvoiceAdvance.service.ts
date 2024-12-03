import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseInvoiceAdvanceServiceBase } from "./base/purchaseInvoiceAdvance.service.base";

@Injectable()
export class PurchaseInvoiceAdvanceService extends PurchaseInvoiceAdvanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
