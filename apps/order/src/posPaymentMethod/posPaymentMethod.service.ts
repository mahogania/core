import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosPaymentMethodServiceBase } from "./base/posPaymentMethod.service.base";

@Injectable()
export class PosPaymentMethodService extends PosPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
