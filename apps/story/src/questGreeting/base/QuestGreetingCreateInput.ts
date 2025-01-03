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
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput } from "./QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput";
import { Type } from "class-transformer";
import { QuestCreateNestedManyWithoutQuestGreetingsInput } from "./QuestCreateNestedManyWithoutQuestGreetingsInput";

@InputType()
class QuestGreetingCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput)
  @IsOptional()
  @Field(() => QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput, {
    nullable: true,
  })
  questGreetingLocales?: QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput;

  @ApiProperty({
    required: false,
    type: () => QuestCreateNestedManyWithoutQuestGreetingsInput,
  })
  @ValidateNested()
  @Type(() => QuestCreateNestedManyWithoutQuestGreetingsInput)
  @IsOptional()
  @Field(() => QuestCreateNestedManyWithoutQuestGreetingsInput, {
    nullable: true,
  })
  quests?: QuestCreateNestedManyWithoutQuestGreetingsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}

export { QuestGreetingCreateInput as QuestGreetingCreateInput };
