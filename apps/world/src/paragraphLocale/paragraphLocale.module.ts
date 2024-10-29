import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParagraphLocaleModuleBase } from "./base/paragraphLocale.module.base";
import { ParagraphLocaleService } from "./paragraphLocale.service";
import { ParagraphLocaleController } from "./paragraphLocale.controller";
import { ParagraphLocaleGrpcController } from "./paragraphLocale.grpc.controller";
import { ParagraphLocaleResolver } from "./paragraphLocale.resolver";

@Module({
  imports: [ParagraphLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParagraphLocaleController, ParagraphLocaleGrpcController],
  providers: [ParagraphLocaleService, ParagraphLocaleResolver],
  exports: [ParagraphLocaleService],
})
export class ParagraphLocaleModule {}
