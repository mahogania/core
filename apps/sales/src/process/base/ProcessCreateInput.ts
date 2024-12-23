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
import { PipelineWhereUniqueInput } from "../../pipeline/base/PipelineWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Pipeline } from "../../pipeline/base/Pipeline";
import { FormCreateNestedManyWithoutProcessesInput } from "./FormCreateNestedManyWithoutProcessesInput";
import { ThreatCreateNestedManyWithoutProcessesInput } from "./ThreatCreateNestedManyWithoutProcessesInput";

@InputType()
class ProcessCreateInput {
  @ApiProperty({
    required: false,
    type: () => PipelineWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PipelineWhereUniqueInput)
  @IsOptional()
  @Field(() => PipelineWhereUniqueInput, {
    nullable: true,
  })
  Pipeline?: PipelineWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FormCreateNestedManyWithoutProcessesInput,
  })
  @ValidateNested()
  @Type(() => FormCreateNestedManyWithoutProcessesInput)
  @IsOptional()
  @Field(() => FormCreateNestedManyWithoutProcessesInput, {
    nullable: true,
  })
  forms?: FormCreateNestedManyWithoutProcessesInput;

  @ApiProperty({
    required: false,
    type: () => ThreatCreateNestedManyWithoutProcessesInput,
  })
  @ValidateNested()
  @Type(() => ThreatCreateNestedManyWithoutProcessesInput)
  @IsOptional()
  @Field(() => ThreatCreateNestedManyWithoutProcessesInput, {
    nullable: true,
  })
  threats?: ThreatCreateNestedManyWithoutProcessesInput;
}

export { ProcessCreateInput as ProcessCreateInput };
