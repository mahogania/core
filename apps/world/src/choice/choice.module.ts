import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChoiceModuleBase } from "./base/choice.module.base";
import { ChoiceService } from "./choice.service";
import { ChoiceController } from "./choice.controller";
import { ChoiceGrpcController } from "./choice.grpc.controller";
import { ChoiceResolver } from "./choice.resolver";

@Module({
  imports: [ChoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChoiceController, ChoiceGrpcController],
  providers: [ChoiceService, ChoiceResolver],
  exports: [ChoiceService],
})
export class ChoiceModule {}
