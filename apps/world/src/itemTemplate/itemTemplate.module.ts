import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemTemplateModuleBase } from "./base/itemTemplate.module.base";
import { ItemTemplateService } from "./itemTemplate.service";
import { ItemTemplateController } from "./itemTemplate.controller";
import { ItemTemplateGrpcController } from "./itemTemplate.grpc.controller";
import { ItemTemplateResolver } from "./itemTemplate.resolver";

@Module({
  imports: [ItemTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemTemplateController, ItemTemplateGrpcController],
  providers: [ItemTemplateService, ItemTemplateResolver],
  exports: [ItemTemplateService],
})
export class ItemTemplateModule {}
