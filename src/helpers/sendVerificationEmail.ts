import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
	email: string,
	username: string,
	verifyCode: string
): Promise<ApiResponse> {
	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: email,
			subject: "Next fundamental | Verification Email",
			react: VerificationEmail({ username, otp: verifyCode }),
		});
		return { success: true, message: "Verification email send successfully" };
	} catch (emailError) {
		console.log("Error Sending verification email", emailError);
		return { success: false, message: "Failed to send verification email" };
	}
}
