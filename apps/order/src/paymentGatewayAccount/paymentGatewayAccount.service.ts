import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentGatewayAccountServiceBase } from "./base/paymentGatewayAccount.service.base";

@Injectable()
export class PaymentGatewayAccountService extends PaymentGatewayAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
