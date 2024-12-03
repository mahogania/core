import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankTransactionServiceBase } from "./base/bankTransaction.service.base";

@Injectable()
export class BankTransactionService extends BankTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
