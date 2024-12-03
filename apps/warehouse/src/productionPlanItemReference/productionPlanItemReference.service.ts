import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanItemReferenceServiceBase } from "./base/productionPlanItemReference.service.base";

@Injectable()
export class ProductionPlanItemReferenceService extends ProductionPlanItemReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
