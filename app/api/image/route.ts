import prisma from "@/lib/db";
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

interface FileData {
  name: string;
  url: string;
}

interface ImageData {
  id: string;
  name: string;
  url: string;
}

const Bucket = process.env.S3_BUCKET_NAME;

const s3Client = new S3Client({
  region: process.env.S3_REGION as string,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
});

//* GET ALL IMAGES FROM PRISMA
export async function GET(req: NextRequest) {
  try {
    const data: ImageData[] = await prisma.images.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({
      request: "Get All Images",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.error("Error Getting All files:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}

//* Uploads multiple image files to an AWS S3 bucket.
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];

    // process and upload files
    const uploadPromises = files.map(async (file): Promise<FileData> => {
      const fileName = uuidv4();

      const url = `https://${process.env.S3_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${fileName}`;

      // Save the file info to the database
      const response = await prisma.images.create({
        data: {
          name: fileName,
          url,
        },
      });

      // convert file to buffer and upload to S3
      const Body = Buffer.from(await file.arrayBuffer());
      await s3Client.send(
        new PutObjectCommand({
          Bucket,
          Key: fileName,
          Body,
          ContentType: file.type,
        }),
      );

      return {
        name: response.name,
        url: response.url,
      };
    });

    const response = await Promise.all(uploadPromises);
    console.log(response);
    return NextResponse.json({ status: 200, response });
  } catch (error) {
    console.log("Error");
    return NextResponse.json({ status: 500, message: error });
  }
}

//* Delete Image from AWS S3 and remove prisma data entry
export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);
    const params = {
      Bucket,
      Key: data.name,
    };

    // Delete the object from S3
    const response = s3Client.send(new DeleteObjectCommand(params));

    // Delete the entry from Prisma
    const deletePost = await prisma.images.delete({
      where: {
        id: data.id,
      },
    });

    return NextResponse.json({
      status: 202,
      awsMessage: response,
      prismaMessage: deletePost,
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
