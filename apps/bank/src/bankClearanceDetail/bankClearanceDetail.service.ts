import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankClearanceDetailServiceBase } from "./base/bankClearanceDetail.service.base";

@Injectable()
export class BankClearanceDetailService extends BankClearanceDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
