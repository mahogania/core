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
import { DealWhereUniqueInput } from "../../deal/base/DealWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContractUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DealWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DealWhereUniqueInput)
  @IsOptional()
  @Field(() => DealWhereUniqueInput, {
    nullable: true,
  })
  deal?: DealWhereUniqueInput | null;
}

export { ContractUpdateInput as ContractUpdateInput };
