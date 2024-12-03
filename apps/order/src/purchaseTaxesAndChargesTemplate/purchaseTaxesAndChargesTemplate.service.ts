import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseTaxesAndChargesTemplateServiceBase } from "./base/purchaseTaxesAndChargesTemplate.service.base";

@Injectable()
export class PurchaseTaxesAndChargesTemplateService extends PurchaseTaxesAndChargesTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
