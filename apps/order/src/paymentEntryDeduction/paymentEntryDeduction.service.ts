import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentEntryDeductionServiceBase } from "./base/paymentEntryDeduction.service.base";

@Injectable()
export class PaymentEntryDeductionService extends PaymentEntryDeductionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
