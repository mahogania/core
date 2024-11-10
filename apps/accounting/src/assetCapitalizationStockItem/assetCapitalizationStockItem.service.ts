import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCapitalizationStockItemServiceBase } from "./base/assetCapitalizationStockItem.service.base";

@Injectable()
export class AssetCapitalizationStockItemService extends AssetCapitalizationStockItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
