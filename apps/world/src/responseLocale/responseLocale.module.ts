import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResponseLocaleModuleBase } from "./base/responseLocale.module.base";
import { ResponseLocaleService } from "./responseLocale.service";
import { ResponseLocaleController } from "./responseLocale.controller";
import { ResponseLocaleGrpcController } from "./responseLocale.grpc.controller";
import { ResponseLocaleResolver } from "./responseLocale.resolver";

@Module({
  imports: [ResponseLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResponseLocaleController, ResponseLocaleGrpcController],
  providers: [ResponseLocaleService, ResponseLocaleResolver],
  exports: [ResponseLocaleService],
})
export class ResponseLocaleModule {}
