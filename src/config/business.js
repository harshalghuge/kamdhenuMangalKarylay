// Add the real 10-digit mobile number before publishing.
// Use digits only, including country code, for WhatsApp (example: 919876543210).
export const business = {
  name: "Kamdhenu Mangal Karyalay",
  address: "Wadgaon Road, Alandi, Pune, Maharashtra",
  phone: "7719070451",
  get callLink() { return this.phone ? `tel:+${this.phone}` : "/contact"; },
  get whatsappLink() { return this.phone ? `https://wa.me/${this.phone}` : "/contact"; },
  get hasPhone() { return Boolean(this.phone); },
};
