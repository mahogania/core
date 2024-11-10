import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentReconciliationLogServiceBase } from "./base/paymentReconciliationLog.service.base";

@Injectable()
export class PaymentReconciliationLogService extends PaymentReconciliationLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
