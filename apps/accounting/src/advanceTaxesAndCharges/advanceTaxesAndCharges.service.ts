import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvanceTaxesAndChargesServiceBase } from "./base/advanceTaxesAndCharges.service.base";

@Injectable()
export class AdvanceTaxesAndChargesService extends AdvanceTaxesAndChargesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
