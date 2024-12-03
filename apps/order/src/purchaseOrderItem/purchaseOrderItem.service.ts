import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseOrderItemServiceBase } from "./base/purchaseOrderItem.service.base";

@Injectable()
export class PurchaseOrderItemService extends PurchaseOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
