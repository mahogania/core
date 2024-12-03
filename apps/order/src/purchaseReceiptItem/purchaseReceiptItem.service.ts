import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseReceiptItemServiceBase } from "./base/purchaseReceiptItem.service.base";

@Injectable()
export class PurchaseReceiptItemService extends PurchaseReceiptItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
