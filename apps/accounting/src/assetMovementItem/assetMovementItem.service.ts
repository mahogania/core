import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetMovementItemServiceBase } from "./base/assetMovementItem.service.base";

@Injectable()
export class AssetMovementItemService extends AssetMovementItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
