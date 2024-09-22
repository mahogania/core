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
import { PlayerchoiceResponseRewardFactionWhereInput } from "./PlayerchoiceResponseRewardFactionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlayerchoiceResponseRewardFactionOrderByInput } from "./PlayerchoiceResponseRewardFactionOrderByInput";

@ArgsType()
class PlayerchoiceResponseRewardFactionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlayerchoiceResponseRewardFactionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlayerchoiceResponseRewardFactionWhereInput, { nullable: true })
  @Type(() => PlayerchoiceResponseRewardFactionWhereInput)
  where?: PlayerchoiceResponseRewardFactionWhereInput;

  @ApiProperty({
    required: false,
    type: [PlayerchoiceResponseRewardFactionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlayerchoiceResponseRewardFactionOrderByInput], {
    nullable: true,
  })
  @Type(() => PlayerchoiceResponseRewardFactionOrderByInput)
  orderBy?: Array<PlayerchoiceResponseRewardFactionOrderByInput>;

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

export { PlayerchoiceResponseRewardFactionFindManyArgs as PlayerchoiceResponseRewardFactionFindManyArgs };
