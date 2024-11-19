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
import { RepresentationWhereUniqueInput } from "./RepresentationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepresentationUpdateInput } from "./RepresentationUpdateInput";

@ArgsType()
class UpdateRepresentationArgs {
  @ApiProperty({
    required: true,
    type: () => RepresentationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepresentationWhereUniqueInput)
  @Field(() => RepresentationWhereUniqueInput, { nullable: false })
  where!: RepresentationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RepresentationUpdateInput,
  })
  @ValidateNested()
  @Type(() => RepresentationUpdateInput)
  @Field(() => RepresentationUpdateInput, { nullable: false })
  data!: RepresentationUpdateInput;
}

export { UpdateRepresentationArgs as UpdateRepresentationArgs };