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
import { PlayerXpForLevelWhereInput } from "./PlayerXpForLevelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PlayerXpForLevelCountArgs {
  @ApiProperty({
    required: false,
    type: () => PlayerXpForLevelWhereInput,
  })
  @Field(() => PlayerXpForLevelWhereInput, { nullable: true })
  @Type(() => PlayerXpForLevelWhereInput)
  where?: PlayerXpForLevelWhereInput;
}

export { PlayerXpForLevelCountArgs as PlayerXpForLevelCountArgs };
