import { Module } from "@nestjs/common";
import { FormModuleBase } from "./base/form.module.base";
import { FormService } from "./form.service";
import { FormController } from "./form.controller";
import { FormGrpcController } from "./form.grpc.controller";
import { FormResolver } from "./form.resolver";

@Module({
  imports: [FormModuleBase],
  controllers: [FormController, FormGrpcController],
  providers: [FormService, FormResolver],
  exports: [FormService],
})
export class FormModule {}
