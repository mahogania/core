/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlayerCraftWhereUniqueInput } from "../../playerCraft/base/PlayerCraftWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlayerCraftCreateNestedManyWithoutCraftsInput {
  @Field(() => [PlayerCraftWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerCraftWhereUniqueInput],
  })
  connect?: Array<PlayerCraftWhereUniqueInput>;
}

export { PlayerCraftCreateNestedManyWithoutCraftsInput as PlayerCraftCreateNestedManyWithoutCraftsInput };