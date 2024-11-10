import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostCenterAllocationServiceBase } from "./base/costCenterAllocation.service.base";

@Injectable()
export class CostCenterAllocationService extends CostCenterAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
