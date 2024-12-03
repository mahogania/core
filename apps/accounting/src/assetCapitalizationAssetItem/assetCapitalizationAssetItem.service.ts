import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCapitalizationAssetItemServiceBase } from "./base/assetCapitalizationAssetItem.service.base";

@Injectable()
export class AssetCapitalizationAssetItemService extends AssetCapitalizationAssetItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
