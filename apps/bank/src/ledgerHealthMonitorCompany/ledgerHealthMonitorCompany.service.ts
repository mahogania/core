import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerHealthMonitorCompanyServiceBase } from "./base/ledgerHealthMonitorCompany.service.base";

@Injectable()
export class LedgerHealthMonitorCompanyService extends LedgerHealthMonitorCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
