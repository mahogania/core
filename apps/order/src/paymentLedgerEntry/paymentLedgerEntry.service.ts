import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentLedgerEntryServiceBase } from "./base/paymentLedgerEntry.service.base";

@Injectable()
export class PaymentLedgerEntryService extends PaymentLedgerEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
