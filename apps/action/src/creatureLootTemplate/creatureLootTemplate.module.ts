import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureLootTemplateModuleBase } from "./base/creatureLootTemplate.module.base";
import { CreatureLootTemplateService } from "./creatureLootTemplate.service";
import { CreatureLootTemplateController } from "./creatureLootTemplate.controller";
import { CreatureLootTemplateGrpcController } from "./creatureLootTemplate.grpc.controller";
import { CreatureLootTemplateResolver } from "./creatureLootTemplate.resolver";

@Module({
  imports: [CreatureLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureLootTemplateController,
    CreatureLootTemplateGrpcController,
  ],
  providers: [CreatureLootTemplateService, CreatureLootTemplateResolver],
  exports: [CreatureLootTemplateService],
})
export class CreatureLootTemplateModule {}
