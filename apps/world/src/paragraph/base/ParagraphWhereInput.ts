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
import { CharacterDialogueListRelationFilter } from "../../characterDialogue/base/CharacterDialogueListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ParagraphLocaleWhereUniqueInput } from "../../paragraphLocale/base/ParagraphLocaleWhereUniqueInput";

@InputType()
class ParagraphWhereInput {
  @ApiProperty({
    required: false,
    type: () => CharacterDialogueListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CharacterDialogueListRelationFilter)
  @IsOptional()
  @Field(() => CharacterDialogueListRelationFilter, {
    nullable: true,
  })
  characterLines?: CharacterDialogueListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  paragraphLocales?: ParagraphLocaleWhereUniqueInput;
}

export { ParagraphWhereInput as ParagraphWhereInput };
