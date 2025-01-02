import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedTaxServiceBase } from "./base/clreDedTax.service.base";

@Injectable()
export class ClreDedTaxService extends ClreDedTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
