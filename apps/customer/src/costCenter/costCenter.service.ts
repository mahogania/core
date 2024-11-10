import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostCenterServiceBase } from "./base/costCenter.service.base";

@Injectable()
export class CostCenterService extends CostCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
