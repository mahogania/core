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
import { PlayerFactionQuestWhereInput } from "./PlayerFactionQuestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayerFactionQuestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlayerFactionQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionQuestWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionQuestWhereInput, {
    nullable: true,
  })
  every?: PlayerFactionQuestWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionQuestWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionQuestWhereInput, {
    nullable: true,
  })
  some?: PlayerFactionQuestWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionQuestWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionQuestWhereInput, {
    nullable: true,
  })
  none?: PlayerFactionQuestWhereInput;
}
export { PlayerFactionQuestListRelationFilter as PlayerFactionQuestListRelationFilter };
