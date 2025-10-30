// Notification service for customer inquiries
const NotificationService = {
  // Send email notification when contact form is submitted
  async sendInquiryNotification(formData) {
    try {
      const message = `
New Gym Equipment Inquiry Received!

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Message: ${formData.message}
- Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Location: Maharashtra, India
      `.trim();

      // Log to console for demonstration
      console.log('📧 INQUIRY NOTIFICATION:', message);
      
      // In production, integrate with email service (like EmailJS, SendGrid, etc.)
      // Example: await emailService.send({ to: 'owner@srengineering.com', subject: 'New Inquiry', body: message });
      
      return { success: true, message: 'Notification sent successfully' };
    } catch (error) {
      console.error('Failed to send notification:', error);
      return { success: false, message: 'Failed to send notification' };
    }
  },

  // Track page visits and searches
  trackVisitor(action) {
    const visitorData = {
      action,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    console.log('👤 VISITOR TRACKING:', visitorData);
    // Store in analytics or send to backend
  }
};