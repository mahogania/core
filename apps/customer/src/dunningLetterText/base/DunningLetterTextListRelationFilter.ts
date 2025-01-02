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
import { DunningLetterTextWhereInput } from "./DunningLetterTextWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DunningLetterTextListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DunningLetterTextWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningLetterTextWhereInput)
  @IsOptional()
  @Field(() => DunningLetterTextWhereInput, {
    nullable: true,
  })
  every?: DunningLetterTextWhereInput;

  @ApiProperty({
    required: false,
    type: () => DunningLetterTextWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningLetterTextWhereInput)
  @IsOptional()
  @Field(() => DunningLetterTextWhereInput, {
    nullable: true,
  })
  some?: DunningLetterTextWhereInput;

  @ApiProperty({
    required: false,
    type: () => DunningLetterTextWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningLetterTextWhereInput)
  @IsOptional()
  @Field(() => DunningLetterTextWhereInput, {
    nullable: true,
  })
  none?: DunningLetterTextWhereInput;
}
export { DunningLetterTextListRelationFilter as DunningLetterTextListRelationFilter };