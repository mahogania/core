import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerMergeServiceBase } from "./base/ledgerMerge.service.base";

@Injectable()
export class LedgerMergeService extends LedgerMergeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
