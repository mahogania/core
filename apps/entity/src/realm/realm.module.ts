import { Module } from "@nestjs/common";
import { RealmModuleBase } from "./base/realm.module.base";
import { RealmService } from "./realm.service";
import { RealmController } from "./realm.controller";
import { RealmGrpcController } from "./realm.grpc.controller";
import { RealmResolver } from "./realm.resolver";

@Module({
  imports: [RealmModuleBase],
  controllers: [RealmController, RealmGrpcController],
  providers: [RealmService, RealmResolver],
  exports: [RealmService],
})
export class RealmModule {}
