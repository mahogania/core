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
import { BattlePetBreedsWhereInput } from "./BattlePetBreedsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BattlePetBreedsOrderByInput } from "./BattlePetBreedsOrderByInput";

@ArgsType()
class BattlePetBreedsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BattlePetBreedsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BattlePetBreedsWhereInput, { nullable: true })
  @Type(() => BattlePetBreedsWhereInput)
  where?: BattlePetBreedsWhereInput;

  @ApiProperty({
    required: false,
    type: [BattlePetBreedsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BattlePetBreedsOrderByInput], { nullable: true })
  @Type(() => BattlePetBreedsOrderByInput)
  orderBy?: Array<BattlePetBreedsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BattlePetBreedsFindManyArgs as BattlePetBreedsFindManyArgs };
