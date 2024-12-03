import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanSalesOrderServiceBase } from "./base/productionPlanSalesOrder.service.base";

@Injectable()
export class ProductionPlanSalesOrderService extends ProductionPlanSalesOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
