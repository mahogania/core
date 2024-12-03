import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarehouseTypeServiceBase } from "./base/warehouseType.service.base";

@Injectable()
export class WarehouseTypeService extends WarehouseTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
