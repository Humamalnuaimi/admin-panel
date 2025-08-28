# Email Templates

This directory contains professional email templates for the Rewin Admin Panel.

## Templates

### 1. User Invitation (`user-invitation.html`)
**Purpose**: Sent when admin invites a new user via email invitation method
**Variables**:
- `{{USER_NAME}}` - Full name of the invited user
- `{{USER_EMAIL}}` - Email address of the invited user
- `{{SETUP_LINK}}` - Password setup link (expires in 24 hours)

**Usage**: When admin selects "Email Invitation" in the Add User modal

### 2. Gmail Invitation (`gmail-invitation.html`)
**Purpose**: Sent when admin invites a new user via Gmail/Google OAuth method
**Variables**:
- `{{USER_NAME}}` - Full name of the invited user
- `{{USER_EMAIL}}` - Email address of the invited user
- `{{SIGNIN_LINK}}` - Direct link to sign in with Google

**Usage**: When admin selects "Gmail Invitation" in the Add User modal

### 3. Password Reset (`password-reset.html`)
**Purpose**: Sent when user requests password reset
**Variables**:
- `{{USER_NAME}}` - Full name of the user
- `{{USER_EMAIL}}` - Email address of the user
- `{{RESET_LINK}}` - Password reset link (expires in 1 hour)
- `{{REQUEST_TIME}}` - Timestamp of the reset request
- `{{REQUEST_IP}}` - IP address of the request (optional)

**Usage**: When user clicks "Forgot Password" on login page

## Design Features

✅ **Professional Design**: Modern, clean layout with Rewin branding
✅ **Responsive**: Works on desktop and mobile devices
✅ **Security Focused**: Clear security notices and expiration times
✅ **Brand Consistent**: Uses Rewin colors and styling
✅ **Accessible**: High contrast and readable fonts
✅ **Action-Oriented**: Clear call-to-action buttons

## Implementation

These templates are ready to be integrated with:
- **Firebase Functions** for sending emails
- **Email services** like SendGrid, Mailgun, or AWS SES
- **Template engines** for variable replacement

## Template Variables

Replace template variables before sending:

```javascript
// Example usage
const template = emailTemplate
  .replace('{{USER_NAME}}', userData.displayName)
  .replace('{{USER_EMAIL}}', userData.email)
  .replace('{{SETUP_LINK}}', invitationLink);
```

## Security Notes

- **Invitation links** expire in 24 hours
- **Password reset links** expire in 1 hour
- All templates include security warnings
- Templates encourage strong password practices
- Clear instructions for users who didn't request the email

## Customization

To customize templates:
1. Update colors in CSS variables
2. Replace logo and branding elements
3. Modify copy and messaging
4. Add/remove template variables as needed

## Testing

Before deploying:
1. Test all template variables are replaced correctly
2. Verify links work and redirect properly
3. Test email rendering across different clients
4. Ensure mobile responsiveness
5. Validate HTML and CSS
