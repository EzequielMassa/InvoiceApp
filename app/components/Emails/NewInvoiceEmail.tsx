import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
	Link,
	Button,
} from "@react-email/components";

const NewInvoiceEmail = ({
	clientName,
	invoiceNumber,
	invoiceDueDate,
	invoiceAmount,
	invoiceLink,
}: {
	clientName: string;
	invoiceNumber: number;
	invoiceDueDate: Date | string;
	invoiceAmount: string;
	invoiceLink: string;
}) => {
	const baseUrl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://invoice-app-jade-rho.vercel.app";

	return (
		<Html>
			<Head />
			<Preview>Your order summary and estimated delivery date</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={message}>
						<Img
							src={`${baseUrl}/logo.png`}
							width="65"
							height="65"
							alt="invoice app logo"
							style={{ margin: "auto" }}
						/>
						<Heading style={global.heading}>Invoice for {clientName}</Heading>
						<Text style={global.text}>
							Dear {clientName}, i hope this email finds you well. Please find
							attached the invoice for your reference.
						</Text>
						<Text style={{ ...global.text, marginTop: 24 }}>
							Invoice Details:
						</Text>
					</Section>
					<Hr style={global.hr} />
					<Section style={global.defaultPadding}>
						<Text style={{ ...global.text, fontSize: 14 }}>
							Total amount: {invoiceAmount}
						</Text>
					</Section>
					<Hr style={global.hr} />
					<Section style={global.defaultPadding}>
						<Row style={{ display: "inline-flex gap-16", marginBottom: 40 }}>
							<Column style={{ width: 170 }}>
								<Text style={global.paragraphWithBold}>Invoice Number</Text>
								<Text style={track.number}>{invoiceNumber}</Text>
							</Column>
							<Column style={{ marginLeft: 20 }}>
								<Text style={global.paragraphWithBold}>Due Date</Text>
								<Text style={track.number}>{invoiceDueDate as string}</Text>
							</Column>
						</Row>
					</Section>

					<Hr style={global.hr} />

					<Section style={paddingY}>
						<Row>
							<Text
								style={{
									...footer.text,
									paddingTop: 30,
									paddingBottom: 30,
								}}
							>
								You can download the invoice from the link below:
							</Text>
							<Button
								style={{
									width: "100%",
									boxSizing: "border-box",
									padding: 12,
									fontWeight: 600,
									borderRadius: 8,
									textAlign: "center",
									backgroundColor: "rgb(79,70,229)",
									color: "rgb(255,255,255)",
								}}
								href={invoiceLink}
							>
								Download Invoice
							</Button>
						</Row>
						<Row>
							<Text style={footer.text}>
								© InvoiceApp, Inc. All Rights Reserved.
							</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default NewInvoiceEmail;

const paddingX = {
	paddingLeft: "40px",
	paddingRight: "40px",
};

const paddingY = {
	paddingTop: "22px",
	paddingBottom: "22px",
};

const paragraph = {
	margin: "0",
	lineHeight: "2",
};

const global = {
	paddingX,
	paddingY,
	defaultPadding: {
		...paddingX,
		...paddingY,
	},
	paragraphWithBold: { ...paragraph, fontWeight: "bold" },
	heading: {
		fontSize: "32px",
		lineHeight: "1.3",
		fontWeight: "700",
		textAlign: "center",
		letterSpacing: "-1px",
	} as React.CSSProperties,
	text: {
		...paragraph,
		color: "#747474",
		fontWeight: "500",
	},
	button: {
		border: "1px solid #929292",
		fontSize: "16px",
		textDecoration: "none",
		padding: "10px 0px",
		width: "220px",
		display: "block",
		textAlign: "center",
		fontWeight: 500,
		color: "#000",
	} as React.CSSProperties,
	hr: {
		borderColor: "#E5E5E5",
		margin: "0",
	},
};

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "10px auto",
	width: "600px",
	maxWidth: "100%",
	border: "1px solid #E5E5E5",
};

const track = {
	container: {
		padding: "22px 40px",
		backgroundColor: "#F7F7F7",
	},
	number: {
		margin: "12px 0 0 0",
		fontWeight: 500,
		lineHeight: "1.4",
		color: "#6F6F6F",
	},
};

const message = {
	padding: "40px 74px",
	textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
	...paragraph,
	fontSize: "15px",
	fontWeight: "bold",
};

const footer = {
	policy: {
		width: "166px",
		margin: "auto",
	},
	text: {
		margin: "0",
		color: "#AFAFAF",
		fontSize: "13px",
		textAlign: "center",
	} as React.CSSProperties,
};
