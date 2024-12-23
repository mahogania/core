/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlayerFactionSpellWhereUniqueInput } from "./PlayerFactionSpellWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PlayerFactionSpellUpdateInput } from "./PlayerFactionSpellUpdateInput";

@ArgsType()
class UpdatePlayerFactionSpellArgs {
  @ApiProperty({
    required: true,
    type: () => PlayerFactionSpellWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionSpellWhereUniqueInput)
  @Field(() => PlayerFactionSpellWhereUniqueInput, { nullable: false })
  where!: PlayerFactionSpellWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PlayerFactionSpellUpdateInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionSpellUpdateInput)
  @Field(() => PlayerFactionSpellUpdateInput, { nullable: false })
  data!: PlayerFactionSpellUpdateInput;
}

export { UpdatePlayerFactionSpellArgs as UpdatePlayerFactionSpellArgs };
