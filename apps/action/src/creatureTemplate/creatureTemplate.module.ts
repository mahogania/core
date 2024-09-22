import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateModuleBase } from "./base/creatureTemplate.module.base";
import { CreatureTemplateService } from "./creatureTemplate.service";
import { CreatureTemplateController } from "./creatureTemplate.controller";
import { CreatureTemplateGrpcController } from "./creatureTemplate.grpc.controller";
import { CreatureTemplateResolver } from "./creatureTemplate.resolver";

@Module({
  imports: [CreatureTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureTemplateController, CreatureTemplateGrpcController],
  providers: [CreatureTemplateService, CreatureTemplateResolver],
  exports: [CreatureTemplateService],
})
export class CreatureTemplateModule {}
