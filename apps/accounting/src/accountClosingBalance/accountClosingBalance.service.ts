import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountClosingBalanceServiceBase } from "./base/accountClosingBalance.service.base";

@Injectable()
export class AccountClosingBalanceService extends AccountClosingBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
