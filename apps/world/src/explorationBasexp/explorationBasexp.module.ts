import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExplorationBasexpModuleBase } from "./base/explorationBasexp.module.base";
import { ExplorationBasexpService } from "./explorationBasexp.service";
import { ExplorationBasexpController } from "./explorationBasexp.controller";
import { ExplorationBasexpGrpcController } from "./explorationBasexp.grpc.controller";
import { ExplorationBasexpResolver } from "./explorationBasexp.resolver";

@Module({
  imports: [ExplorationBasexpModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExplorationBasexpController, ExplorationBasexpGrpcController],
  providers: [ExplorationBasexpService, ExplorationBasexpResolver],
  exports: [ExplorationBasexpService],
})
export class ExplorationBasexpModule {}
