export const environment = {
    production: true,
    baseHref: '/sericy-visu-template-ui/',
    appName: 'Sericy Angular Template',
    identityServerConfig: {
        issuer: '/sericy-security-api',
        redirectUri: '/sericy-visu-template-ui',
        clientId: 'sericy-visu-template-ui',
        scope: 'openid profile offline_access email sericy-security-api sericy-settings-api sericy-internationalization-frontend-api',
        postLogoutRedirectUri: '/sericy-visu-template-ui/index.html',
        unauthorizedUrl: '/forbidden',
        skipIssuerCheck: true,
        strictDiscoveryDocumentValidation: false,
        requireHttps: false,
        responseType: 'code'
    }
};
