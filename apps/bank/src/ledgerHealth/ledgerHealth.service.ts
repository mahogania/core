import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerHealthServiceBase } from "./base/ledgerHealth.service.base";

@Injectable()
export class LedgerHealthService extends LedgerHealthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
