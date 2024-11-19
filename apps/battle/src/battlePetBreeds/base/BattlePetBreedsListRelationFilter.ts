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
import { BattlePetBreedsWhereInput } from "./BattlePetBreedsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BattlePetBreedsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BattlePetBreedsWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetBreedsWhereInput)
  @IsOptional()
  @Field(() => BattlePetBreedsWhereInput, {
    nullable: true,
  })
  every?: BattlePetBreedsWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattlePetBreedsWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetBreedsWhereInput)
  @IsOptional()
  @Field(() => BattlePetBreedsWhereInput, {
    nullable: true,
  })
  some?: BattlePetBreedsWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattlePetBreedsWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetBreedsWhereInput)
  @IsOptional()
  @Field(() => BattlePetBreedsWhereInput, {
    nullable: true,
  })
  none?: BattlePetBreedsWhereInput;
}
export { BattlePetBreedsListRelationFilter as BattlePetBreedsListRelationFilter };
