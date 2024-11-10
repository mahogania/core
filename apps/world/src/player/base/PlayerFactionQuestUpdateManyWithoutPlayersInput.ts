/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlayerFactionQuestWhereUniqueInput } from "../../playerFactionQuest/base/PlayerFactionQuestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlayerFactionQuestUpdateManyWithoutPlayersInput {
  @Field(() => [PlayerFactionQuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerFactionQuestWhereUniqueInput],
  })
  connect?: Array<PlayerFactionQuestWhereUniqueInput>;

  @Field(() => [PlayerFactionQuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerFactionQuestWhereUniqueInput],
  })
  disconnect?: Array<PlayerFactionQuestWhereUniqueInput>;

  @Field(() => [PlayerFactionQuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerFactionQuestWhereUniqueInput],
  })
  set?: Array<PlayerFactionQuestWhereUniqueInput>;
}

export { PlayerFactionQuestUpdateManyWithoutPlayersInput as PlayerFactionQuestUpdateManyWithoutPlayersInput };
