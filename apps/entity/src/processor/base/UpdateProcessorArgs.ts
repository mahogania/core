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
import { ProcessorWhereUniqueInput } from "./ProcessorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProcessorUpdateInput } from "./ProcessorUpdateInput";

@ArgsType()
class UpdateProcessorArgs {
  @ApiProperty({
    required: true,
    type: () => ProcessorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProcessorWhereUniqueInput)
  @Field(() => ProcessorWhereUniqueInput, { nullable: false })
  where!: ProcessorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProcessorUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProcessorUpdateInput)
  @Field(() => ProcessorUpdateInput, { nullable: false })
  data!: ProcessorUpdateInput;
}

export { UpdateProcessorArgs as UpdateProcessorArgs };
