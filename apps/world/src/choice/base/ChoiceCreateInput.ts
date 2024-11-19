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
import { ChoiceLocaleWhereUniqueInput } from "../../choiceLocale/base/ChoiceLocaleWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

@InputType()
class ChoiceCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChoiceLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChoiceLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => ChoiceLocaleWhereUniqueInput, {
    nullable: true,
  })
  choiceLocales?: ChoiceLocaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
    type: () => ResponseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResponseWhereUniqueInput)
  @Field(() => ResponseWhereUniqueInput)
  responses!: ResponseWhereUniqueInput | null;
}

export { ChoiceCreateInput as ChoiceCreateInput };