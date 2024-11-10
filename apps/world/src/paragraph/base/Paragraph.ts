/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CharacterDialogue } from "../../characterDialogue/base/CharacterDialogue";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ParagraphLocale } from "../../paragraphLocale/base/ParagraphLocale";

@ObjectType()
class Paragraph {
  @ApiProperty({
    required: false,
    type: () => [CharacterDialogue],
  })
  @ValidateNested()
  @Type(() => CharacterDialogue)
  @IsOptional()
  characterLines?: Array<CharacterDialogue>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => ParagraphLocale,
  })
  @ValidateNested()
  @Type(() => ParagraphLocale)
  @IsOptional()
  paragraphLocales?: ParagraphLocale | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Paragraph as Paragraph };