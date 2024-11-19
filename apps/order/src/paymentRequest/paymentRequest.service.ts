import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentRequestServiceBase } from "./base/paymentRequest.service.base";

@Injectable()
export class PaymentRequestService extends PaymentRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
