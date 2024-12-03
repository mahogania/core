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
import { MaintenanceTeamMemberWhereInput } from "./MaintenanceTeamMemberWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MaintenanceTeamMemberOrderByInput } from "./MaintenanceTeamMemberOrderByInput";

@ArgsType()
class MaintenanceTeamMemberFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MaintenanceTeamMemberWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MaintenanceTeamMemberWhereInput, { nullable: true })
  @Type(() => MaintenanceTeamMemberWhereInput)
  where?: MaintenanceTeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: [MaintenanceTeamMemberOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MaintenanceTeamMemberOrderByInput], { nullable: true })
  @Type(() => MaintenanceTeamMemberOrderByInput)
  orderBy?: Array<MaintenanceTeamMemberOrderByInput>;

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

export { MaintenanceTeamMemberFindManyArgs as MaintenanceTeamMemberFindManyArgs };