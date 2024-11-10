import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetActivityServiceBase } from "./base/assetActivity.service.base";

@Injectable()
export class AssetActivityService extends AssetActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
