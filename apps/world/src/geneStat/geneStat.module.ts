import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeneStatModuleBase } from "./base/geneStat.module.base";
import { GeneStatService } from "./geneStat.service";
import { GeneStatController } from "./geneStat.controller";
import { GeneStatGrpcController } from "./geneStat.grpc.controller";
import { GeneStatResolver } from "./geneStat.resolver";

@Module({
  imports: [GeneStatModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeneStatController, GeneStatGrpcController],
  providers: [GeneStatService, GeneStatResolver],
  exports: [GeneStatService],
})
export class GeneStatModule {}
