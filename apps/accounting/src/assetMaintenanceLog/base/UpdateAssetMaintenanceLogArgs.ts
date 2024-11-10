/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssetMaintenanceLogWhereUniqueInput } from "./AssetMaintenanceLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssetMaintenanceLogUpdateInput } from "./AssetMaintenanceLogUpdateInput";

@ArgsType()
class UpdateAssetMaintenanceLogArgs {
  @ApiProperty({
    required: true,
    type: () => AssetMaintenanceLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetMaintenanceLogWhereUniqueInput)
  @Field(() => AssetMaintenanceLogWhereUniqueInput, { nullable: false })
  where!: AssetMaintenanceLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssetMaintenanceLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssetMaintenanceLogUpdateInput)
  @Field(() => AssetMaintenanceLogUpdateInput, { nullable: false })
  data!: AssetMaintenanceLogUpdateInput;
}

export { UpdateAssetMaintenanceLogArgs as UpdateAssetMaintenanceLogArgs };