import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthConfig = {
	providers: [
		Credentials({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "Enter your email id",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req): Promise<any> {
				await dbConnect();
				try {
				} catch (error) {}
			},
		}),
	],
};
