import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductBundleItemServiceBase } from "./base/productBundleItem.service.base";

@Injectable()
export class ProductBundleItemService extends ProductBundleItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
