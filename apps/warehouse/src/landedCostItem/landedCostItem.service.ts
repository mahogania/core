import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandedCostItemServiceBase } from "./base/landedCostItem.service.base";

@Injectable()
export class LandedCostItemService extends LandedCostItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
