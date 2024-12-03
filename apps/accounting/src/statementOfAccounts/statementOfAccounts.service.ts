import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatementOfAccountsServiceBase } from "./base/statementOfAccounts.service.base";

@Injectable()
export class StatementOfAccountsService extends StatementOfAccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
