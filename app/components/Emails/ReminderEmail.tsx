import { Section, Img, Text, Heading, Button } from "@react-email/components";

function ReminderEmail({ first_name }: { first_name: string }) {
	const baseUrl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://invoiceapp-lovat.vercel.app";

	return (
		<Section style={{ marginTop: 16, marginBottom: 16 }}>
			<Img
				alt="InvoiceApp Logo"
				src={`${baseUrl}/logo.png`}
				style={{
					width: "65px",
					height: "65px",
					marginLeft: "auto",
					marginRight: "auto",
					borderRadius: 12,
					objectFit: "cover",
				}}
			/>
			<Section
				style={{
					marginTop: 32,
					textAlign: "center",
				}}
			>
				<Heading
					as="h1"
					style={{
						margin: "0px",
						marginTop: 8,
						fontSize: 36,
						lineHeight: "36px",
						fontWeight: 600,
						color: "rgb(17,24,39)",
					}}
				>
					Warning! Invoice payment is overdue
				</Heading>
				<Text
					style={{
						fontSize: 16,
						lineHeight: "24px",
						color: "rgb(107,114,128)",
					}}
				>
					Hey {first_name} we have noticed that your invoice payment is overdue.
					Please make sure to pay your invoice as soon as possible to avoid any
					further issues. if you have any questions regarding your invoice,
					please feel free to contact us with your invoice number and we are
					here to help.
				</Text>
				<Button
					href={`${baseUrl}`}
					style={{
						marginTop: 16,
						borderRadius: 8,
						backgroundColor: "rgb(79,70,229)",
						paddingLeft: 40,
						paddingRight: 40,
						paddingTop: 12,
						paddingBottom: 12,
						fontWeight: 600,
						color: "rgb(255,255,255)",
					}}
				>
					Contact Us
				</Button>
			</Section>
		</Section>
	);
}

export default ReminderEmail;
