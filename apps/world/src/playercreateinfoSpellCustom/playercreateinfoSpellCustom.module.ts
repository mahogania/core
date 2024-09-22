import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayercreateinfoSpellCustomModuleBase } from "./base/playercreateinfoSpellCustom.module.base";
import { PlayercreateinfoSpellCustomService } from "./playercreateinfoSpellCustom.service";
import { PlayercreateinfoSpellCustomController } from "./playercreateinfoSpellCustom.controller";
import { PlayercreateinfoSpellCustomGrpcController } from "./playercreateinfoSpellCustom.grpc.controller";
import { PlayercreateinfoSpellCustomResolver } from "./playercreateinfoSpellCustom.resolver";

@Module({
  imports: [
    PlayercreateinfoSpellCustomModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayercreateinfoSpellCustomController,
    PlayercreateinfoSpellCustomGrpcController,
  ],
  providers: [
    PlayercreateinfoSpellCustomService,
    PlayercreateinfoSpellCustomResolver,
  ],
  exports: [PlayercreateinfoSpellCustomService],
})
export class PlayercreateinfoSpellCustomModule {}
