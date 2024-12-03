import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesInvoiceItemServiceBase } from "./base/salesInvoiceItem.service.base";

@Injectable()
export class SalesInvoiceItemService extends SalesInvoiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
