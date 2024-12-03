import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingPeriodServiceBase } from "./base/accountingPeriod.service.base";

@Injectable()
export class AccountingPeriodService extends AccountingPeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
