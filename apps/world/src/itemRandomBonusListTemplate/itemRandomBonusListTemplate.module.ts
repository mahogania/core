import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemRandomBonusListTemplateModuleBase } from "./base/itemRandomBonusListTemplate.module.base";
import { ItemRandomBonusListTemplateService } from "./itemRandomBonusListTemplate.service";
import { ItemRandomBonusListTemplateController } from "./itemRandomBonusListTemplate.controller";
import { ItemRandomBonusListTemplateGrpcController } from "./itemRandomBonusListTemplate.grpc.controller";
import { ItemRandomBonusListTemplateResolver } from "./itemRandomBonusListTemplate.resolver";

@Module({
  imports: [
    ItemRandomBonusListTemplateModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    ItemRandomBonusListTemplateController,
    ItemRandomBonusListTemplateGrpcController,
  ],
  providers: [
    ItemRandomBonusListTemplateService,
    ItemRandomBonusListTemplateResolver,
  ],
  exports: [ItemRandomBonusListTemplateService],
})
export class ItemRandomBonusListTemplateModule {}
