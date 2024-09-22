import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTextModuleBase } from "./base/creatureText.module.base";
import { CreatureTextService } from "./creatureText.service";
import { CreatureTextController } from "./creatureText.controller";
import { CreatureTextGrpcController } from "./creatureText.grpc.controller";
import { CreatureTextResolver } from "./creatureText.resolver";

@Module({
  imports: [CreatureTextModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureTextController, CreatureTextGrpcController],
  providers: [CreatureTextService, CreatureTextResolver],
  exports: [CreatureTextService],
})
export class CreatureTextModule {}
