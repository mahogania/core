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
import { EventScriptNamesWhereInput } from "./EventScriptNamesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EventScriptNamesOrderByInput } from "./EventScriptNamesOrderByInput";

@ArgsType()
class EventScriptNamesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EventScriptNamesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EventScriptNamesWhereInput, { nullable: true })
  @Type(() => EventScriptNamesWhereInput)
  where?: EventScriptNamesWhereInput;

  @ApiProperty({
    required: false,
    type: [EventScriptNamesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EventScriptNamesOrderByInput], { nullable: true })
  @Type(() => EventScriptNamesOrderByInput)
  orderBy?: Array<EventScriptNamesOrderByInput>;

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

export { EventScriptNamesFindManyArgs as EventScriptNamesFindManyArgs };
