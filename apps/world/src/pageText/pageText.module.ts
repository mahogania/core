import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageTextModuleBase } from "./base/pageText.module.base";
import { PageTextService } from "./pageText.service";
import { PageTextController } from "./pageText.controller";
import { PageTextGrpcController } from "./pageText.grpc.controller";
import { PageTextResolver } from "./pageText.resolver";

@Module({
  imports: [PageTextModuleBase, forwardRef(() => AuthModule)],
  controllers: [PageTextController, PageTextGrpcController],
  providers: [PageTextService, PageTextResolver],
  exports: [PageTextService],
})
export class PageTextModule {}
