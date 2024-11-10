import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesTaxesAndChargesServiceBase } from "./base/salesTaxesAndCharges.service.base";

@Injectable()
export class SalesTaxesAndChargesService extends SalesTaxesAndChargesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
