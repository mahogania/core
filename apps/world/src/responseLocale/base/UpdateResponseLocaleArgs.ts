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
import { ResponseLocaleWhereUniqueInput } from "./ResponseLocaleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResponseLocaleUpdateInput } from "./ResponseLocaleUpdateInput";

@ArgsType()
class UpdateResponseLocaleArgs {
  @ApiProperty({
    required: true,
    type: () => ResponseLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleWhereUniqueInput)
  @Field(() => ResponseLocaleWhereUniqueInput, { nullable: false })
  where!: ResponseLocaleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResponseLocaleUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleUpdateInput)
  @Field(() => ResponseLocaleUpdateInput, { nullable: false })
  data!: ResponseLocaleUpdateInput;
}

export { UpdateResponseLocaleArgs as UpdateResponseLocaleArgs };