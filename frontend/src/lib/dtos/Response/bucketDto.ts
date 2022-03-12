/* Auto Generated */

import { SecretDto } from "./secretDto";

export interface BucketDto {
    bucketId: string;
    submissionId: string;
    publicKey: string;
    privateKey: string;
    secrets: SecretDto[];
    createdAt: Date;
    updatedAt: Date;
}
