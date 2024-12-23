/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MaintenanceTeamMemberWhereInput } from "./MaintenanceTeamMemberWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceTeamMemberListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintenanceTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceTeamMemberWhereInput)
  @IsOptional()
  @Field(() => MaintenanceTeamMemberWhereInput, {
    nullable: true,
  })
  every?: MaintenanceTeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceTeamMemberWhereInput)
  @IsOptional()
  @Field(() => MaintenanceTeamMemberWhereInput, {
    nullable: true,
  })
  some?: MaintenanceTeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceTeamMemberWhereInput)
  @IsOptional()
  @Field(() => MaintenanceTeamMemberWhereInput, {
    nullable: true,
  })
  none?: MaintenanceTeamMemberWhereInput;
}
export { MaintenanceTeamMemberListRelationFilter as MaintenanceTeamMemberListRelationFilter };
