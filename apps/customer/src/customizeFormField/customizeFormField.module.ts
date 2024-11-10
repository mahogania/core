import { Module } from "@nestjs/common";
import { CustomizeFormFieldModuleBase } from "./base/customizeFormField.module.base";
import { CustomizeFormFieldService } from "./customizeFormField.service";
import { CustomizeFormFieldController } from "./customizeFormField.controller";
import { CustomizeFormFieldResolver } from "./customizeFormField.resolver";

@Module({
  imports: [CustomizeFormFieldModuleBase],
  controllers: [CustomizeFormFieldController],
  providers: [CustomizeFormFieldService, CustomizeFormFieldResolver],
  exports: [CustomizeFormFieldService],
})
export class CustomizeFormFieldModule {}
