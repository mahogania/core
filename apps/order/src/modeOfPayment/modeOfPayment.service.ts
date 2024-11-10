import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModeOfPaymentServiceBase } from "./base/modeOfPayment.service.base";

@Injectable()
export class ModeOfPaymentService extends ModeOfPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
