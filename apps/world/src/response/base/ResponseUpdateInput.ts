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
import { ChoiceWhereUniqueInput } from "../../choice/base/ChoiceWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";
import { ResponseLocaleWhereUniqueInput } from "../../responseLocale/base/ResponseLocaleWhereUniqueInput";

@InputType()
class ResponseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChoiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ChoiceWhereUniqueInput, {
    nullable: true,
  })
  choice?: ChoiceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ResponseLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => ResponseLocaleWhereUniqueInput, {
    nullable: true,
  })
  responseLocales?: ResponseLocaleWhereUniqueInput | null;
}

export { ResponseUpdateInput as ResponseUpdateInput };