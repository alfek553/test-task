/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        isSeo: process.env.IS_SEO,
        baseUrl: process.env.BASE_URL,
        isProduction: process.env.IS_PRODUCTION,
        hostName: process.env.HOST_NAME,
        domenName: process.env.DOMEN_NAME,
        protocol: process.env.PROTOCOL,
        googleAnalytics: process.env.GOOGLE_ANALYTICS,
        googleAnalyticsSecond: process.env.GOOGLE_ANALYTICS_SECOND,
        smtpLogin: process.env.SMTP_LOGIN,
        smtpPassword: process.env.SMTP_PASSWORD,
        smtpPort: process.env.SMTP_PORT,
        smtpHost: process.env.SMTP_HOST,
        supportEmail: process.env.SUPPORT_EMAIL,
        senderEmail: process.env.SENDER_EMAIL,
        devSupEmail: process.env.DEV_SUPPORT_EMAIL,
        isHotkeys: process.env.IS_HOTKEYS,
        adsGoogle: process.env.ADS_GOOGLE,
        quantcast: process.env.QUANTCAST,
        isShowAddGeometry: process.env.IS_SHOW_ADD_GEOMETRY,
      },
      experimental: {
        serverActions: true,
      },
    
};

export default nextConfig;
