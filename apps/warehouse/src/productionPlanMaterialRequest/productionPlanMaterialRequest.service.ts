import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanMaterialRequestServiceBase } from "./base/productionPlanMaterialRequest.service.base";

@Injectable()
export class ProductionPlanMaterialRequestService extends ProductionPlanMaterialRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
