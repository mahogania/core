import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentOrderReferenceServiceBase } from "./base/paymentOrderReference.service.base";

@Injectable()
export class PaymentOrderReferenceService extends PaymentOrderReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
