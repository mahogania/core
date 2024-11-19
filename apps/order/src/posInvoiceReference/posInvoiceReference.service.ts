import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosInvoiceReferenceServiceBase } from "./base/posInvoiceReference.service.base";

@Injectable()
export class PosInvoiceReferenceService extends PosInvoiceReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
