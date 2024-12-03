import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosClosingEntryTaxesServiceBase } from "./base/posClosingEntryTaxes.service.base";

@Injectable()
export class PosClosingEntryTaxesService extends PosClosingEntryTaxesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
