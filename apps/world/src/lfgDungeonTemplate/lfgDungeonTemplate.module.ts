import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LfgDungeonTemplateModuleBase } from "./base/lfgDungeonTemplate.module.base";
import { LfgDungeonTemplateService } from "./lfgDungeonTemplate.service";
import { LfgDungeonTemplateController } from "./lfgDungeonTemplate.controller";
import { LfgDungeonTemplateGrpcController } from "./lfgDungeonTemplate.grpc.controller";
import { LfgDungeonTemplateResolver } from "./lfgDungeonTemplate.resolver";

@Module({
  imports: [LfgDungeonTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [LfgDungeonTemplateController, LfgDungeonTemplateGrpcController],
  providers: [LfgDungeonTemplateService, LfgDungeonTemplateResolver],
  exports: [LfgDungeonTemplateService],
})
export class LfgDungeonTemplateModule {}
