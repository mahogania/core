import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateSparringModuleBase } from "./base/creatureTemplateSparring.module.base";
import { CreatureTemplateSparringService } from "./creatureTemplateSparring.service";
import { CreatureTemplateSparringController } from "./creatureTemplateSparring.controller";
import { CreatureTemplateSparringGrpcController } from "./creatureTemplateSparring.grpc.controller";
import { CreatureTemplateSparringResolver } from "./creatureTemplateSparring.resolver";

@Module({
  imports: [CreatureTemplateSparringModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateSparringController,
    CreatureTemplateSparringGrpcController,
  ],
  providers: [
    CreatureTemplateSparringService,
    CreatureTemplateSparringResolver,
  ],
  exports: [CreatureTemplateSparringService],
})
export class CreatureTemplateSparringModule {}
