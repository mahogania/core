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
import { ParagraphLocaleWhereInput } from "./ParagraphLocaleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParagraphLocaleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParagraphLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ParagraphLocaleWhereInput)
  @IsOptional()
  @Field(() => ParagraphLocaleWhereInput, {
    nullable: true,
  })
  every?: ParagraphLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParagraphLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ParagraphLocaleWhereInput)
  @IsOptional()
  @Field(() => ParagraphLocaleWhereInput, {
    nullable: true,
  })
  some?: ParagraphLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParagraphLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ParagraphLocaleWhereInput)
  @IsOptional()
  @Field(() => ParagraphLocaleWhereInput, {
    nullable: true,
  })
  none?: ParagraphLocaleWhereInput;
}
export { ParagraphLocaleListRelationFilter as ParagraphLocaleListRelationFilter };
