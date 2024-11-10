import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankTransactionPaymentsServiceBase } from "./base/bankTransactionPayments.service.base";

@Injectable()
export class BankTransactionPaymentsService extends BankTransactionPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
