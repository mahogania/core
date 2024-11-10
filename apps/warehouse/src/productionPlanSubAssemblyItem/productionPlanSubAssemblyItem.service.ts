import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanSubAssemblyItemServiceBase } from "./base/productionPlanSubAssemblyItem.service.base";

@Injectable()
export class ProductionPlanSubAssemblyItemService extends ProductionPlanSubAssemblyItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
