import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPlanItemServiceBase } from "./base/productionPlanItem.service.base";

@Injectable()
export class ProductionPlanItemService extends ProductionPlanItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
