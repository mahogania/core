/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Module } from "@nestjs/common";
import { ACLModule } from "../../auth/acl.module";
import { StorageModule } from "src/storage/storage.module";
@Module({
  imports: [StorageModule, ACLModule],
  exports: [StorageModule, ACLModule],
})
export class GameWeatherModuleBase {}
