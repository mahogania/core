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
import { CommandUpdateManyWithoutProcessorsInput } from "./CommandUpdateManyWithoutProcessorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ViewUpdateManyWithoutProcessorsInput } from "./ViewUpdateManyWithoutProcessorsInput";

@InputType()
class ProcessorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommandUpdateManyWithoutProcessorsInput,
  })
  @ValidateNested()
  @Type(() => CommandUpdateManyWithoutProcessorsInput)
  @IsOptional()
  @Field(() => CommandUpdateManyWithoutProcessorsInput, {
    nullable: true,
  })
  commands?: CommandUpdateManyWithoutProcessorsInput;

  @ApiProperty({
    required: false,
    type: () => ViewUpdateManyWithoutProcessorsInput,
  })
  @ValidateNested()
  @Type(() => ViewUpdateManyWithoutProcessorsInput)
  @IsOptional()
  @Field(() => ViewUpdateManyWithoutProcessorsInput, {
    nullable: true,
  })
  views?: ViewUpdateManyWithoutProcessorsInput;
}

export { ProcessorUpdateInput as ProcessorUpdateInput };
