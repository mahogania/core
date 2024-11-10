import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemSupplierServiceBase } from "./base/itemSupplier.service.base";

@Injectable()
export class ItemSupplierService extends ItemSupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
