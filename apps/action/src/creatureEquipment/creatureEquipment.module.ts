import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureEquipmentModuleBase } from "./base/creatureEquipment.module.base";
import { CreatureEquipmentService } from "./creatureEquipment.service";
import { CreatureEquipmentController } from "./creatureEquipment.controller";
import { CreatureEquipmentGrpcController } from "./creatureEquipment.grpc.controller";
import { CreatureEquipmentResolver } from "./creatureEquipment.resolver";

@Module({
  imports: [CreatureEquipmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureEquipmentController, CreatureEquipmentGrpcController],
  providers: [CreatureEquipmentService, CreatureEquipmentResolver],
  exports: [CreatureEquipmentService],
})
export class CreatureEquipmentModule {}
