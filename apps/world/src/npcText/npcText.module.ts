import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NpcTextModuleBase } from "./base/npcText.module.base";
import { NpcTextService } from "./npcText.service";
import { NpcTextController } from "./npcText.controller";
import { NpcTextGrpcController } from "./npcText.grpc.controller";
import { NpcTextResolver } from "./npcText.resolver";

@Module({
  imports: [NpcTextModuleBase, forwardRef(() => AuthModule)],
  controllers: [NpcTextController, NpcTextGrpcController],
  providers: [NpcTextService, NpcTextResolver],
  exports: [NpcTextService],
})
export class NpcTextModule {}
