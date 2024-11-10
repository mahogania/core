import { Module } from "@nestjs/common";
import { ApplicableOnAccountModuleBase } from "./base/applicableOnAccount.module.base";
import { ApplicableOnAccountService } from "./applicableOnAccount.service";
import { ApplicableOnAccountController } from "./applicableOnAccount.controller";
import { ApplicableOnAccountResolver } from "./applicableOnAccount.resolver";

@Module({
  imports: [ApplicableOnAccountModuleBase],
  controllers: [ApplicableOnAccountController],
  providers: [ApplicableOnAccountService, ApplicableOnAccountResolver],
  exports: [ApplicableOnAccountService],
})
export class ApplicableOnAccountModule {}
