// Hardcoded credentials (GitHub should detect this)
const GITHUB_TOKEN = "ghp_1234567890abcdef01234567890ab"; // GitHub PAT
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // AWS Secret Key
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"; // AWS Access Key
const DATABASE_PASSWORD = "SuperSecret123"; // Hardcoded DB password

// API keys inside objects
const credentials = {
    apiKey: "AIzaSyB-EXAMPLEAPIKEY", // Google API Key
    stripeSecret: "sk_live_4eC39HqLyjWDarjtT1zdp7dc", // Stripe Secret Key
    slackToken: "xoxb-123456789012-ABCDEFGHIJKLMNO", // Slack Bot Token
};

// Exposed private key
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA7v1L8jRfBv0AQLyH6xF+Zz0jGEXAMPLEKEY2W8GghdQIDAQAB
-----END RSA PRIVATE KEY-----`;

// Dummy function using credentials
function connectToDatabase() {
    console.log("Connecting to DB with password:", DATABASE_PASSWORD);
}

// Usage of leaked credentials
console.log("GitHub Token:", GITHUB_TOKEN);
console.log("AWS Key:", AWS_ACCESS_KEY_ID);
console.log("Stripe Key:", credentials.stripeSecret);
