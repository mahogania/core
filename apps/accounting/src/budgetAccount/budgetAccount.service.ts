import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BudgetAccountServiceBase } from "./base/budgetAccount.service.base";

@Injectable()
export class BudgetAccountService extends BudgetAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
