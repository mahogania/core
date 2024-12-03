import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesInvoiceServiceBase } from "./base/salesInvoice.service.base";

@Injectable()
export class SalesInvoiceService extends SalesInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
