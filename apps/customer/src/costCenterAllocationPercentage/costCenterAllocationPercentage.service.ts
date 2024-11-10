import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostCenterAllocationPercentageServiceBase } from "./base/costCenterAllocationPercentage.service.base";

@Injectable()
export class CostCenterAllocationPercentageService extends CostCenterAllocationPercentageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
