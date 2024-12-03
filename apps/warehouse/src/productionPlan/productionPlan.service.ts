import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanServiceBase } from "./base/productionPlan.service.base";

@Injectable()
export class ProductionPlanService extends ProductionPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
