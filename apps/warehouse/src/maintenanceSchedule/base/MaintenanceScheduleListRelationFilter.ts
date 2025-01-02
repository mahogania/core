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
import { MaintenanceScheduleWhereInput } from "./MaintenanceScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintenanceScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceScheduleWhereInput)
  @IsOptional()
  @Field(() => MaintenanceScheduleWhereInput, {
    nullable: true,
  })
  every?: MaintenanceScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceScheduleWhereInput)
  @IsOptional()
  @Field(() => MaintenanceScheduleWhereInput, {
    nullable: true,
  })
  some?: MaintenanceScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceScheduleWhereInput)
  @IsOptional()
  @Field(() => MaintenanceScheduleWhereInput, {
    nullable: true,
  })
  none?: MaintenanceScheduleWhereInput;
}
export { MaintenanceScheduleListRelationFilter as MaintenanceScheduleListRelationFilter };