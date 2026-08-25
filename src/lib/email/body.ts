import type { PartnerInquiryEmailPayload } from './types';

export function buildPartnerInquiryBody(payload: PartnerInquiryEmailPayload) {
  return [
    'New partner inquiry from the Meros landing page',
    '',
    `Full name: ${payload.fullName}`,
    `Contact email (reply to this person): ${payload.email}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');
}

export function buildPartnerInquiryHtml(payload: PartnerInquiryEmailPayload) {
  return `
    <h2>New partner inquiry</h2>
    <p><strong>Full name:</strong> ${escapeHtml(payload.fullName)}</p>
    <p><strong>Contact email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
    <p><em>Reply to this email to answer the sender directly.</em></p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
