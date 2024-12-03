import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesInvoiceAdvanceServiceBase } from "./base/salesInvoiceAdvance.service.base";

@Injectable()
export class SalesInvoiceAdvanceService extends SalesInvoiceAdvanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
