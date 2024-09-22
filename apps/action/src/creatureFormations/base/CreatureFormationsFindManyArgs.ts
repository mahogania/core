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
import { CreatureFormationsWhereInput } from "./CreatureFormationsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureFormationsOrderByInput } from "./CreatureFormationsOrderByInput";

@ArgsType()
class CreatureFormationsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureFormationsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureFormationsWhereInput, { nullable: true })
  @Type(() => CreatureFormationsWhereInput)
  where?: CreatureFormationsWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureFormationsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureFormationsOrderByInput], { nullable: true })
  @Type(() => CreatureFormationsOrderByInput)
  orderBy?: Array<CreatureFormationsOrderByInput>;

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

export { CreatureFormationsFindManyArgs as CreatureFormationsFindManyArgs };
