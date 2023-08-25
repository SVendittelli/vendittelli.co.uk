export const baseEnvironment = {
  apiBaseURL: process.env['NX_API_BASE_URL'] ?? '',
  imageBaseURL: process.env['NX_IMAGE_BASE_URL'] ?? '',
  emailjsPublicKey: process.env['NX_EMAILJS_PUBLIC_KEY'],
};
