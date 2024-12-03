import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseReceiptItemSuppliedServiceBase } from "./base/purchaseReceiptItemSupplied.service.base";

@Injectable()
export class PurchaseReceiptItemSuppliedService extends PurchaseReceiptItemSuppliedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
