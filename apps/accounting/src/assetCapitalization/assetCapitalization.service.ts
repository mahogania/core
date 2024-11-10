import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCapitalizationServiceBase } from "./base/assetCapitalization.service.base";

@Injectable()
export class AssetCapitalizationService extends AssetCapitalizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
