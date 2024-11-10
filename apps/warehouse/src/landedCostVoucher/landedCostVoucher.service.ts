import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandedCostVoucherServiceBase } from "./base/landedCostVoucher.service.base";

@Injectable()
export class LandedCostVoucherService extends LandedCostVoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
