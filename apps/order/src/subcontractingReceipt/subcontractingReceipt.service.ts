import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingReceiptServiceBase } from "./base/subcontractingReceipt.service.base";

@Injectable()
export class SubcontractingReceiptService extends SubcontractingReceiptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
