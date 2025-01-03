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
import { DataImportLogWhereInput } from "./DataImportLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DataImportLogOrderByInput } from "./DataImportLogOrderByInput";

@ArgsType()
class DataImportLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DataImportLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DataImportLogWhereInput, { nullable: true })
  @Type(() => DataImportLogWhereInput)
  where?: DataImportLogWhereInput;

  @ApiProperty({
    required: false,
    type: [DataImportLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DataImportLogOrderByInput], { nullable: true })
  @Type(() => DataImportLogOrderByInput)
  orderBy?: Array<DataImportLogOrderByInput>;

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

export { DataImportLogFindManyArgs as DataImportLogFindManyArgs };
