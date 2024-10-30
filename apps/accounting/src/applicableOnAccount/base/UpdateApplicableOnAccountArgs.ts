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
import { ApplicableOnAccountWhereUniqueInput } from "./ApplicableOnAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApplicableOnAccountUpdateInput } from "./ApplicableOnAccountUpdateInput";

@ArgsType()
class UpdateApplicableOnAccountArgs {
  @ApiProperty({
    required: true,
    type: () => ApplicableOnAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicableOnAccountWhereUniqueInput)
  @Field(() => ApplicableOnAccountWhereUniqueInput, { nullable: false })
  where!: ApplicableOnAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ApplicableOnAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => ApplicableOnAccountUpdateInput)
  @Field(() => ApplicableOnAccountUpdateInput, { nullable: false })
  data!: ApplicableOnAccountUpdateInput;
}

export { UpdateApplicableOnAccountArgs as UpdateApplicableOnAccountArgs };
