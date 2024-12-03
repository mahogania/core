import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosInvoiceItemServiceBase } from "./base/posInvoiceItem.service.base";

@Injectable()
export class PosInvoiceItemService extends PosInvoiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
