import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCategoryAccountServiceBase } from "./base/assetCategoryAccount.service.base";

@Injectable()
export class AssetCategoryAccountService extends AssetCategoryAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
