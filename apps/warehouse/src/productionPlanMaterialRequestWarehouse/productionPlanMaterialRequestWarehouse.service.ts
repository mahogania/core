import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanMaterialRequestWarehouseServiceBase } from "./base/productionPlanMaterialRequestWarehouse.service.base";

@Injectable()
export class ProductionPlanMaterialRequestWarehouseService extends ProductionPlanMaterialRequestWarehouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
