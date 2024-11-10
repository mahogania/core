import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParagraphModuleBase } from "./base/paragraph.module.base";
import { ParagraphService } from "./paragraph.service";
import { ParagraphController } from "./paragraph.controller";
import { ParagraphGrpcController } from "./paragraph.grpc.controller";
import { ParagraphResolver } from "./paragraph.resolver";

@Module({
  imports: [ParagraphModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParagraphController, ParagraphGrpcController],
  providers: [ParagraphService, ParagraphResolver],
  exports: [ParagraphService],
})
export class ParagraphModule {}
