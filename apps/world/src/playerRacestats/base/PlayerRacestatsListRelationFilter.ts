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
import { PlayerRacestatsWhereInput } from "./PlayerRacestatsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayerRacestatsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlayerRacestatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerRacestatsWhereInput)
  @IsOptional()
  @Field(() => PlayerRacestatsWhereInput, {
    nullable: true,
  })
  every?: PlayerRacestatsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerRacestatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerRacestatsWhereInput)
  @IsOptional()
  @Field(() => PlayerRacestatsWhereInput, {
    nullable: true,
  })
  some?: PlayerRacestatsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerRacestatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerRacestatsWhereInput)
  @IsOptional()
  @Field(() => PlayerRacestatsWhereInput, {
    nullable: true,
  })
  none?: PlayerRacestatsWhereInput;
}
export { PlayerRacestatsListRelationFilter as PlayerRacestatsListRelationFilter };
