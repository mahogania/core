import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCategoryServiceBase } from "./base/assetCategory.service.base";

@Injectable()
export class AssetCategoryService extends AssetCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
