import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const ContactEmail = ({
  name,
  email,
  company,
  service,
  budget,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={heading}>New Contact Form Submission</Text>
          <Hr style={hr} />

          <Row>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
          </Row>

          <Row>
            <Text style={label}>Email:</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
          </Row>

          {company && (
            <Row>
              <Text style={label}>Company:</Text>
              <Text style={value}>{company}</Text>
            </Row>
          )}

          <Row>
            <Text style={label}>Service Interested In:</Text>
            <Text style={value}>{formatService(service)}</Text>
          </Row>

          <Row>
            <Text style={label}>Budget Range:</Text>
            <Text style={value}>{formatBudget(budget)}</Text>
          </Row>

          <Row>
            <Text style={label}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Row>

          <Hr style={hr} />

          <Section style={footerSection}>
            <Text style={footerText}>
              © 2026 Solutioneers. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href="https://solutioneers.in">Visit our website</Link>
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

function formatService(service: string): string {
  const services: Record<string, string> = {
    'web-development': 'Web Development',
    'mobile-app-development': 'Mobile App Development',
    'ui-ux-design': 'UI/UX Design',
    'digital-marketing': 'Digital Marketing',
    'seo-services': 'SEO Services',
    other: 'Other',
  };
  return services[service] || service;
}

function formatBudget(budget: string): string {
  const budgets: Record<string, string> = {
    'under-25k': 'Under ₹25,000',
    '25k-50k': '₹25,000 - ₹50,000',
    '50k-100k': '₹50,000 - ₹100,000',
    '100k-300k': '₹100,000 - ₹300,000',
    'over-300k': '₹300,000+',
    'not-sure': 'Not sure yet',
  };
  return budgets[budget] || budget;
}

const main = {
  backgroundColor: '#f3f3f5',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,100,.1)',
  marginTop: '20px',
  width: '480px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const box = {
  padding: '0 34px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const hr = {
  borderColor: '#e5e5e5',
  margin: '20px 0',
};

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#484848',
  marginBottom: '4px',
};

const value = {
  fontSize: '14px',
  color: '#666666',
  marginBottom: '12px',
};

const messageStyle = {
  fontSize: '14px',
  color: '#666666',
  marginBottom: '12px',
  whiteSpace: 'pre-wrap' as const,
  wordBreak: 'break-word' as const,
};

const footerSection = {
  paddingTop: '20px',
  borderTop: '1px solid #eee',
};

const footerText = {
  fontSize: '12px',
  color: '#999999',
  textAlign: 'center' as const,
  marginTop: '10px',
};

export default ContactEmail;
