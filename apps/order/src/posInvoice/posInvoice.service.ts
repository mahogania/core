import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosInvoiceServiceBase } from "./base/posInvoice.service.base";

@Injectable()
export class PosInvoiceService extends PosInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
