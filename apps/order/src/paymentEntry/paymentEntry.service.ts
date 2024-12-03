import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentEntryServiceBase } from "./base/paymentEntry.service.base";

@Injectable()
export class PaymentEntryService extends PaymentEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
