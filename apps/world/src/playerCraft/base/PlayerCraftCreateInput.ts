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
import { CraftWhereUniqueInput } from "../../craft/base/CraftWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class PlayerCraftCreateInput {
  @ApiProperty({
    required: true,
    type: () => CraftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CraftWhereUniqueInput)
  @Field(() => CraftWhereUniqueInput)
  craft!: CraftWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @Field(() => PlayerWhereUniqueInput)
  player!: PlayerWhereUniqueInput;
}

export { PlayerCraftCreateInput as PlayerCraftCreateInput };
