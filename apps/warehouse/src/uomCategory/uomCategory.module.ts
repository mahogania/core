import { Module } from "@nestjs/common";
import { UomCategoryModuleBase } from "./base/uomCategory.module.base";
import { UomCategoryService } from "./uomCategory.service";
import { UomCategoryController } from "./uomCategory.controller";
import { UomCategoryResolver } from "./uomCategory.resolver";

@Module({
  imports: [UomCategoryModuleBase],
  controllers: [UomCategoryController],
  providers: [UomCategoryService, UomCategoryResolver],
  exports: [UomCategoryService],
})
export class UomCategoryModule {}
