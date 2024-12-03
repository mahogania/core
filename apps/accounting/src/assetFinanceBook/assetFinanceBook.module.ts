import { Module } from "@nestjs/common";
import { AssetFinanceBookModuleBase } from "./base/assetFinanceBook.module.base";
import { AssetFinanceBookService } from "./assetFinanceBook.service";
import { AssetFinanceBookController } from "./assetFinanceBook.controller";
import { AssetFinanceBookResolver } from "./assetFinanceBook.resolver";

@Module({
  imports: [AssetFinanceBookModuleBase],
  controllers: [AssetFinanceBookController],
  providers: [AssetFinanceBookService, AssetFinanceBookResolver],
  exports: [AssetFinanceBookService],
})
export class AssetFinanceBookModule {}
