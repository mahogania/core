import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateModelModuleBase } from "./base/creatureTemplateModel.module.base";
import { CreatureTemplateModelService } from "./creatureTemplateModel.service";
import { CreatureTemplateModelController } from "./creatureTemplateModel.controller";
import { CreatureTemplateModelGrpcController } from "./creatureTemplateModel.grpc.controller";
import { CreatureTemplateModelResolver } from "./creatureTemplateModel.resolver";

@Module({
  imports: [CreatureTemplateModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateModelController,
    CreatureTemplateModelGrpcController,
  ],
  providers: [CreatureTemplateModelService, CreatureTemplateModelResolver],
  exports: [CreatureTemplateModelService],
})
export class CreatureTemplateModelModule {}
