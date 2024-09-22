import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureEquipTemplateModuleBase } from "./base/creatureEquipTemplate.module.base";
import { CreatureEquipTemplateService } from "./creatureEquipTemplate.service";
import { CreatureEquipTemplateController } from "./creatureEquipTemplate.controller";
import { CreatureEquipTemplateGrpcController } from "./creatureEquipTemplate.grpc.controller";
import { CreatureEquipTemplateResolver } from "./creatureEquipTemplate.resolver";

@Module({
  imports: [CreatureEquipTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureEquipTemplateController,
    CreatureEquipTemplateGrpcController,
  ],
  providers: [CreatureEquipTemplateService, CreatureEquipTemplateResolver],
  exports: [CreatureEquipTemplateService],
})
export class CreatureEquipTemplateModule {}
