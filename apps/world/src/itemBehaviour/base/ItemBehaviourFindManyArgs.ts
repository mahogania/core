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
import { ItemBehaviourWhereInput } from "./ItemBehaviourWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemBehaviourOrderByInput } from "./ItemBehaviourOrderByInput";

@ArgsType()
class ItemBehaviourFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemBehaviourWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemBehaviourWhereInput, { nullable: true })
  @Type(() => ItemBehaviourWhereInput)
  where?: ItemBehaviourWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemBehaviourOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemBehaviourOrderByInput], { nullable: true })
  @Type(() => ItemBehaviourOrderByInput)
  orderBy?: Array<ItemBehaviourOrderByInput>;

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

export { ItemBehaviourFindManyArgs as ItemBehaviourFindManyArgs };