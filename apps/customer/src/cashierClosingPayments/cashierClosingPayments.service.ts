import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashierClosingPaymentsServiceBase } from "./base/cashierClosingPayments.service.base";

@Injectable()
export class CashierClosingPaymentsService extends CashierClosingPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
