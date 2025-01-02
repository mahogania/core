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
import { DataImportWhereInput } from "./DataImportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataImportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataImportWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportWhereInput)
  @IsOptional()
  @Field(() => DataImportWhereInput, {
    nullable: true,
  })
  every?: DataImportWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataImportWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportWhereInput)
  @IsOptional()
  @Field(() => DataImportWhereInput, {
    nullable: true,
  })
  some?: DataImportWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataImportWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportWhereInput)
  @IsOptional()
  @Field(() => DataImportWhereInput, {
    nullable: true,
  })
  none?: DataImportWhereInput;
}
export { DataImportListRelationFilter as DataImportListRelationFilter };