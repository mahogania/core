import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandedCostTaxesAndChargesServiceBase } from "./base/landedCostTaxesAndCharges.service.base";

@Injectable()
export class LandedCostTaxesAndChargesService extends LandedCostTaxesAndChargesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
