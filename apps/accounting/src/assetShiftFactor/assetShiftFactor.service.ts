import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetShiftFactorServiceBase } from "./base/assetShiftFactor.service.base";

@Injectable()
export class AssetShiftFactorService extends AssetShiftFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
