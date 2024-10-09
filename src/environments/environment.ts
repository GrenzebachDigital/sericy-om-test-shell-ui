export const environment = {
    production: false,
    baseHref: '/sericy-visu-template-ui/',
    appName: 'Sericy Angular Template',
    domainUrl: 'https://development.sericy.io',
    identityServerConfig: {
        issuer: 'https://development.sericy.io/sericy-security-api',
        redirectUri: 'http://localhost:4202/sericy-visu-template-ui',
        clientId: 'sericy-visu-template-ui',
        scope: 'openid profile offline_access email sericy-security-api sericy-settings-api sericy-internationalization-frontend-api',
        postLogoutRedirectUri: 'http://localhost:4202/sericy-visu-template-ui',
        unauthorizedUrl: '/forbidden',
        skipIssuerCheck: true,
        strictDiscoveryDocumentValidation: false,
        requireHttps: false,
        responseType: 'code'
    }
};
