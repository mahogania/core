import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentReconciliationLogAllocationServiceBase } from "./base/paymentReconciliationLogAllocation.service.base";

@Injectable()
export class PaymentReconciliationLogAllocationService extends PaymentReconciliationLogAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
