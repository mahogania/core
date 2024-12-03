import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnreconcilePaymentServiceBase } from "./base/unreconcilePayment.service.base";

@Injectable()
export class UnreconcilePaymentService extends UnreconcilePaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
