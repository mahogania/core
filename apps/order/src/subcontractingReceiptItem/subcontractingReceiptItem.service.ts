import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingReceiptItemServiceBase } from "./base/subcontractingReceiptItem.service.base";

@Injectable()
export class SubcontractingReceiptItemService extends SubcontractingReceiptItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
