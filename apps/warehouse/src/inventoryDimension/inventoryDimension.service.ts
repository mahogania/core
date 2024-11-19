import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryDimensionServiceBase } from "./base/inventoryDimension.service.base";

@Injectable()
export class InventoryDimensionService extends InventoryDimensionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
