import { Injectable } from "@nestjs/common";
import { User } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) { }
    login() {
        return {
            statuscode: 200,
            message: 'Login successfully',
            data: {
                "user-id": '23123'
            }
        }
    }

    register() {
        return {
            statuscode: 200,
            message: 'Register successfully',
            data: {
                "user-id": '23123'
            }
        }
    }
}