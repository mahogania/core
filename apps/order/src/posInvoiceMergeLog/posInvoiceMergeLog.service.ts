import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosInvoiceMergeLogServiceBase } from "./base/posInvoiceMergeLog.service.base";

@Injectable()
export class PosInvoiceMergeLogService extends PosInvoiceMergeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
