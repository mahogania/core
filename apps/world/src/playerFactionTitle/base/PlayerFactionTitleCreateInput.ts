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
import { FactionWhereUniqueInput } from "../../faction/base/FactionWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class PlayerFactionTitleCreateInput {
  @ApiProperty({
    required: false,
    type: () => FactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FactionWhereUniqueInput)
  @IsOptional()
  @Field(() => FactionWhereUniqueInput, {
    nullable: true,
  })
  faction?: FactionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput | null;
}

export { PlayerFactionTitleCreateInput as PlayerFactionTitleCreateInput };
