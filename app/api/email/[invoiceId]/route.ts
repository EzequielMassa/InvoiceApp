import ReminderEmail from "@/app/components/Emails/ReminderEmail";
import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
	request: Request,
	{
		params,
	}: {
		params: Promise<{ invoiceId: string }>;
	}
) {
	try {
		const session = await requireUser();

		const { invoiceId } = await params;

		const invoiceData = await prisma.invoice.findUnique({
			where: {
				id: invoiceId,
				userId: session.user?.id,
			},
		});

		if (!invoiceData) {
			return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
		}

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [invoiceData.clientEmail],
			subject: "Reminder InvoiceApp",
			react: ReminderEmail({
				first_name: invoiceData.clientName,
			}),
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to send Email reminder" },
			{ status: 500 }
		);
	}
}
