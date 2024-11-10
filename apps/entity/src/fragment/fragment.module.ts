import { Module } from "@nestjs/common";
import { FragmentModuleBase } from "./base/fragment.module.base";
import { FragmentService } from "./fragment.service";
import { FragmentController } from "./fragment.controller";
import { FragmentGrpcController } from "./fragment.grpc.controller";
import { FragmentResolver } from "./fragment.resolver";

@Module({
  imports: [FragmentModuleBase],
  controllers: [FragmentController, FragmentGrpcController],
  providers: [FragmentService, FragmentResolver],
  exports: [FragmentService],
})
export class FragmentModule {}
