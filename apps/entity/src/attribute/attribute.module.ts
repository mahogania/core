import { Module } from "@nestjs/common";
import { AttributeModuleBase } from "./base/attribute.module.base";
import { AttributeService } from "./attribute.service";
import { AttributeController } from "./attribute.controller";
import { AttributeGrpcController } from "./attribute.grpc.controller";
import { AttributeResolver } from "./attribute.resolver";

@Module({
  imports: [AttributeModuleBase],
  controllers: [AttributeController, AttributeGrpcController],
  providers: [AttributeService, AttributeResolver],
  exports: [AttributeService],
})
export class AttributeModule {}
