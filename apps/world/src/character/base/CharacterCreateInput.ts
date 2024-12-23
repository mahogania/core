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
import { CharacterDialogueCreateNestedManyWithoutCharactersInput } from "./CharacterDialogueCreateNestedManyWithoutCharactersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CharacterSpellWhereUniqueInput } from "../../characterSpell/base/CharacterSpellWhereUniqueInput";

@InputType()
class CharacterCreateInput {
  @ApiProperty({
    required: true,
    type: () => CharacterDialogueCreateNestedManyWithoutCharactersInput,
  })
  @ValidateNested()
  @Type(() => CharacterDialogueCreateNestedManyWithoutCharactersInput)
  @IsOptional()
  @Field(() => CharacterDialogueCreateNestedManyWithoutCharactersInput, {
    nullable: true,
  })
  characterDialogues?: CharacterDialogueCreateNestedManyWithoutCharactersInput;

  @ApiProperty({
    required: false,
    type: () => CharacterSpellWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CharacterSpellWhereUniqueInput)
  @IsOptional()
  @Field(() => CharacterSpellWhereUniqueInput, {
    nullable: true,
  })
  characterSpells?: CharacterSpellWhereUniqueInput | null;
}

export { CharacterCreateInput as CharacterCreateInput };
