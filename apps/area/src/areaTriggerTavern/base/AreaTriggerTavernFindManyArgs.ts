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
import { AreaTriggerTavernWhereInput } from "./AreaTriggerTavernWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AreaTriggerTavernOrderByInput } from "./AreaTriggerTavernOrderByInput";

@ArgsType()
class AreaTriggerTavernFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerTavernWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AreaTriggerTavernWhereInput, { nullable: true })
  @Type(() => AreaTriggerTavernWhereInput)
  where?: AreaTriggerTavernWhereInput;

  @ApiProperty({
    required: false,
    type: [AreaTriggerTavernOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AreaTriggerTavernOrderByInput], { nullable: true })
  @Type(() => AreaTriggerTavernOrderByInput)
  orderBy?: Array<AreaTriggerTavernOrderByInput>;

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

export { AreaTriggerTavernFindManyArgs as AreaTriggerTavernFindManyArgs };