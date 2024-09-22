import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageTextLocaleModuleBase } from "./base/pageTextLocale.module.base";
import { PageTextLocaleService } from "./pageTextLocale.service";
import { PageTextLocaleController } from "./pageTextLocale.controller";
import { PageTextLocaleGrpcController } from "./pageTextLocale.grpc.controller";
import { PageTextLocaleResolver } from "./pageTextLocale.resolver";

@Module({
  imports: [PageTextLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PageTextLocaleController, PageTextLocaleGrpcController],
  providers: [PageTextLocaleService, PageTextLocaleResolver],
  exports: [PageTextLocaleService],
})
export class PageTextLocaleModule {}
