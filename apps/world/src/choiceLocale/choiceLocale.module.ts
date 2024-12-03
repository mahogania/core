import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChoiceLocaleModuleBase } from "./base/choiceLocale.module.base";
import { ChoiceLocaleService } from "./choiceLocale.service";
import { ChoiceLocaleController } from "./choiceLocale.controller";
import { ChoiceLocaleGrpcController } from "./choiceLocale.grpc.controller";
import { ChoiceLocaleResolver } from "./choiceLocale.resolver";

@Module({
  imports: [ChoiceLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChoiceLocaleController, ChoiceLocaleGrpcController],
  providers: [ChoiceLocaleService, ChoiceLocaleResolver],
  exports: [ChoiceLocaleService],
})
export class ChoiceLocaleModule {}
