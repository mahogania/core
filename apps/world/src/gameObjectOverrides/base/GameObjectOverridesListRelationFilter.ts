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
import { GameObjectOverridesWhereInput } from "./GameObjectOverridesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameObjectOverridesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameObjectOverridesWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectOverridesWhereInput)
  @IsOptional()
  @Field(() => GameObjectOverridesWhereInput, {
    nullable: true,
  })
  every?: GameObjectOverridesWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectOverridesWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectOverridesWhereInput)
  @IsOptional()
  @Field(() => GameObjectOverridesWhereInput, {
    nullable: true,
  })
  some?: GameObjectOverridesWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectOverridesWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectOverridesWhereInput)
  @IsOptional()
  @Field(() => GameObjectOverridesWhereInput, {
    nullable: true,
  })
  none?: GameObjectOverridesWhereInput;
}
export { GameObjectOverridesListRelationFilter as GameObjectOverridesListRelationFilter };
