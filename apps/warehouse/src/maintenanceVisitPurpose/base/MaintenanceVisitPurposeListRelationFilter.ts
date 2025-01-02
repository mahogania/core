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
import { MaintenanceVisitPurposeWhereInput } from "./MaintenanceVisitPurposeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceVisitPurposeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintenanceVisitPurposeWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitPurposeWhereInput)
  @IsOptional()
  @Field(() => MaintenanceVisitPurposeWhereInput, {
    nullable: true,
  })
  every?: MaintenanceVisitPurposeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceVisitPurposeWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitPurposeWhereInput)
  @IsOptional()
  @Field(() => MaintenanceVisitPurposeWhereInput, {
    nullable: true,
  })
  some?: MaintenanceVisitPurposeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceVisitPurposeWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitPurposeWhereInput)
  @IsOptional()
  @Field(() => MaintenanceVisitPurposeWhereInput, {
    nullable: true,
  })
  none?: MaintenanceVisitPurposeWhereInput;
}
export { MaintenanceVisitPurposeListRelationFilter as MaintenanceVisitPurposeListRelationFilter };