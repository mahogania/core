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
import { DataImportWhereUniqueInput } from "./DataImportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataImportUpdateInput } from "./DataImportUpdateInput";

@ArgsType()
class UpdateDataImportArgs {
  @ApiProperty({
    required: true,
    type: () => DataImportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataImportWhereUniqueInput)
  @Field(() => DataImportWhereUniqueInput, { nullable: false })
  where!: DataImportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataImportUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataImportUpdateInput)
  @Field(() => DataImportUpdateInput, { nullable: false })
  data!: DataImportUpdateInput;
}

export { UpdateDataImportArgs as UpdateDataImportArgs };