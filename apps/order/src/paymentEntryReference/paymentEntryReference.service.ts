import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentEntryReferenceServiceBase } from "./base/paymentEntryReference.service.base";

@Injectable()
export class PaymentEntryReferenceService extends PaymentEntryReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
