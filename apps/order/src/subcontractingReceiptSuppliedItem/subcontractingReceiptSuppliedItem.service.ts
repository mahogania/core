import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingReceiptSuppliedItemServiceBase } from "./base/subcontractingReceiptSuppliedItem.service.base";

@Injectable()
export class SubcontractingReceiptSuppliedItemService extends SubcontractingReceiptSuppliedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
