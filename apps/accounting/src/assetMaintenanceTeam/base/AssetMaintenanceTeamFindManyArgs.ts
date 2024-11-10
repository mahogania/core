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
import { AssetMaintenanceTeamWhereInput } from "./AssetMaintenanceTeamWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssetMaintenanceTeamOrderByInput } from "./AssetMaintenanceTeamOrderByInput";

@ArgsType()
class AssetMaintenanceTeamFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssetMaintenanceTeamWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssetMaintenanceTeamWhereInput, { nullable: true })
  @Type(() => AssetMaintenanceTeamWhereInput)
  where?: AssetMaintenanceTeamWhereInput;

  @ApiProperty({
    required: false,
    type: [AssetMaintenanceTeamOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssetMaintenanceTeamOrderByInput], { nullable: true })
  @Type(() => AssetMaintenanceTeamOrderByInput)
  orderBy?: Array<AssetMaintenanceTeamOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AssetMaintenanceTeamFindManyArgs as AssetMaintenanceTeamFindManyArgs };