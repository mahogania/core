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
import { DataImportLogWhereInput } from "./DataImportLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataImportLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataImportLogWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportLogWhereInput)
  @IsOptional()
  @Field(() => DataImportLogWhereInput, {
    nullable: true,
  })
  every?: DataImportLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataImportLogWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportLogWhereInput)
  @IsOptional()
  @Field(() => DataImportLogWhereInput, {
    nullable: true,
  })
  some?: DataImportLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataImportLogWhereInput,
  })
  @ValidateNested()
  @Type(() => DataImportLogWhereInput)
  @IsOptional()
  @Field(() => DataImportLogWhereInput, {
    nullable: true,
  })
  none?: DataImportLogWhereInput;
}
export { DataImportLogListRelationFilter as DataImportLogListRelationFilter };
