import { ApplicationStatus } from "@prisma/client";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailApplicationUpdateProps {
  applicantName: string;
  jobTitle: string;
  status: ApplicationStatus;
  companyName: string;
  adminEmail: string;
  reason?: string;
  liveLink: string;
}

export const EmailApplicationUpdate = ({
  applicantName,
  jobTitle,
  status,
  companyName,
  adminEmail,
  reason,
  liveLink,
}: EmailApplicationUpdateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Job Application Status Update</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={heading}>Job Application Update</Heading>
            <Text>Dear {applicantName},</Text>
            <Text>
              <strong>Note:</strong> This mail is generated by{" "}
              <Link href={liveLink.toString()}>Jobify | Gets you hired</Link> a
              projected developed by{" "}
              <Link href="mailto:paarthrane3@gmail.com">Paarth Rane</Link>
            </Text>
            <Text>
              We are writing to inform you about the status of your application
              for the position of <strong>{jobTitle}</strong>.
            </Text>
            {status === "Accepted" ? (
              <>
                <Text>
                  Congratulations! We are pleased to inform you that your
                  application has been accepted. Our HR department will be in
                  touch with you shortly to discuss the next steps.
                </Text>
                <Text>
                  Thank you for your interest in joining our team. We look
                  forward to working with you.
                </Text>
              </>
            ) : (
              <>
                <Text>
                  We regret to inform you that your application has not been
                  successful on this occasion. The reason for this decision is
                  as follows:
                </Text>
                <Text style={reasonText}>{reason}</Text>
                <Text>
                  We encourage you to apply for future openings that match your
                  skills and experience.
                </Text>
              </>
            )}
            <Text>Best regards,</Text>
            <Text>{companyName} Recruitment Team</Text>
            <Link href={adminEmail}>{adminEmail}</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "10px 20px",
  maxWidth: "600px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const heading = {
  fontSize: "24px",
  marginBottom: "20px",
  color: "#333333",
};

const reasonText = {
  color: "#d9534f",
  fontStyle: "italic",
};
