import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseTaxesAndChargesServiceBase } from "./base/purchaseTaxesAndCharges.service.base";

@Injectable()
export class PurchaseTaxesAndChargesService extends PurchaseTaxesAndChargesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
