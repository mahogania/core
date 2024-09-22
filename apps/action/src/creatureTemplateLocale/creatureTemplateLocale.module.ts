import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateLocaleModuleBase } from "./base/creatureTemplateLocale.module.base";
import { CreatureTemplateLocaleService } from "./creatureTemplateLocale.service";
import { CreatureTemplateLocaleController } from "./creatureTemplateLocale.controller";
import { CreatureTemplateLocaleGrpcController } from "./creatureTemplateLocale.grpc.controller";
import { CreatureTemplateLocaleResolver } from "./creatureTemplateLocale.resolver";

@Module({
  imports: [CreatureTemplateLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateLocaleController,
    CreatureTemplateLocaleGrpcController,
  ],
  providers: [CreatureTemplateLocaleService, CreatureTemplateLocaleResolver],
  exports: [CreatureTemplateLocaleService],
})
export class CreatureTemplateLocaleModule {}
