import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTextLocaleModuleBase } from "./base/creatureTextLocale.module.base";
import { CreatureTextLocaleService } from "./creatureTextLocale.service";
import { CreatureTextLocaleController } from "./creatureTextLocale.controller";
import { CreatureTextLocaleGrpcController } from "./creatureTextLocale.grpc.controller";
import { CreatureTextLocaleResolver } from "./creatureTextLocale.resolver";

@Module({
  imports: [CreatureTextLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureTextLocaleController, CreatureTextLocaleGrpcController],
  providers: [CreatureTextLocaleService, CreatureTextLocaleResolver],
  exports: [CreatureTextLocaleService],
})
export class CreatureTextLocaleModule {}
