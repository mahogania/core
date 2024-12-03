import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentReconciliationServiceBase } from "./base/paymentReconciliation.service.base";

@Injectable()
export class PaymentReconciliationService extends PaymentReconciliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
