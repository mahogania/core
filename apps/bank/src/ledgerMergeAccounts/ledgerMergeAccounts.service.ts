import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerMergeAccountsServiceBase } from "./base/ledgerMergeAccounts.service.base";

@Injectable()
export class LedgerMergeAccountsService extends LedgerMergeAccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
