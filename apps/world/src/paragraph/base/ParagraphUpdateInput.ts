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
import { CharacterDialogueUpdateManyWithoutParagraphsInput } from "./CharacterDialogueUpdateManyWithoutParagraphsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ParagraphLocaleWhereUniqueInput } from "../../paragraphLocale/base/ParagraphLocaleWhereUniqueInput";

@InputType()
class ParagraphUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CharacterDialogueUpdateManyWithoutParagraphsInput,
  })
  @ValidateNested()
  @Type(() => CharacterDialogueUpdateManyWithoutParagraphsInput)
  @IsOptional()
  @Field(() => CharacterDialogueUpdateManyWithoutParagraphsInput, {
    nullable: true,
  })
  characterLines?: CharacterDialogueUpdateManyWithoutParagraphsInput;

  @ApiProperty({
    required: false,
    type: () => ParagraphLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParagraphLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => ParagraphLocaleWhereUniqueInput, {
    nullable: true,
  })
  paragraphLocales?: ParagraphLocaleWhereUniqueInput | null;
}

export { ParagraphUpdateInput as ParagraphUpdateInput };