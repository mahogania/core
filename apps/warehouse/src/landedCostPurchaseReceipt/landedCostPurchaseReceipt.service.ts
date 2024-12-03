import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandedCostPurchaseReceiptServiceBase } from "./base/landedCostPurchaseReceipt.service.base";

@Injectable()
export class LandedCostPurchaseReceiptService extends LandedCostPurchaseReceiptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
