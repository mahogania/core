import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemManufacturerServiceBase } from "./base/itemManufacturer.service.base";

@Injectable()
export class ItemManufacturerService extends ItemManufacturerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
