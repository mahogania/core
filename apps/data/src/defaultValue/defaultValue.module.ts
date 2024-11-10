import { Module } from "@nestjs/common";
import { DefaultValueModuleBase } from "./base/defaultValue.module.base";
import { DefaultValueService } from "./defaultValue.service";
import { DefaultValueController } from "./defaultValue.controller";
import { DefaultValueResolver } from "./defaultValue.resolver";

@Module({
  imports: [DefaultValueModuleBase],
  controllers: [DefaultValueController],
  providers: [DefaultValueService, DefaultValueResolver],
  exports: [DefaultValueService],
})
export class DefaultValueModule {}
