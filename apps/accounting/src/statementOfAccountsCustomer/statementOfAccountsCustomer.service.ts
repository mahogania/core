import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatementOfAccountsCustomerServiceBase } from "./base/statementOfAccountsCustomer.service.base";

@Injectable()
export class StatementOfAccountsCustomerService extends StatementOfAccountsCustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
