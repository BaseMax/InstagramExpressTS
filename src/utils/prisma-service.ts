import { PrismaClient } from "@prisma/client";
import { injectable, singleton } from "tsyringe";

export class PrismaService extends PrismaClient {}
