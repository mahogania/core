import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetCapitalizationServiceItemServiceBase } from "./base/assetCapitalizationServiceItem.service.base";

@Injectable()
export class AssetCapitalizationServiceItemService extends AssetCapitalizationServiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
