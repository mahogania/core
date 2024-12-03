import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetFinanceBookServiceBase } from "./base/assetFinanceBook.service.base";

@Injectable()
export class AssetFinanceBookService extends AssetFinanceBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
