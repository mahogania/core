import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModeOfPaymentAccountServiceBase } from "./base/modeOfPaymentAccount.service.base";

@Injectable()
export class ModeOfPaymentAccountService extends ModeOfPaymentAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
