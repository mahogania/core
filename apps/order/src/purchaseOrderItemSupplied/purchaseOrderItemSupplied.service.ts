import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseOrderItemSuppliedServiceBase } from "./base/purchaseOrderItemSupplied.service.base";

@Injectable()
export class PurchaseOrderItemSuppliedService extends PurchaseOrderItemSuppliedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
