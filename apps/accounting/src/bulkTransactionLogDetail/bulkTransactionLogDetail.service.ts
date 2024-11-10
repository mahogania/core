import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BulkTransactionLogDetailServiceBase } from "./base/bulkTransactionLogDetail.service.base";

@Injectable()
export class BulkTransactionLogDetailService extends BulkTransactionLogDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
