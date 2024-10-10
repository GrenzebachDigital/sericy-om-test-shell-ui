export const environment = {
    production: true,
    baseHref: '/sericy-om-test-shell-ui/',
    appName: 'Sericy Angular Template',
    identityServerConfig: {
        issuer: '/sericy-security-api',
        redirectUri: '/sericy-om-test-shell-ui',
        clientId: 'sericy-om-test-shell-ui',
        scope: 'openid profile offline_access email sericy-security-api sericy-settings-api sericy-internationalization-frontend-api',
        postLogoutRedirectUri: '/sericy-om-test-shell-ui/index.html',
        unauthorizedUrl: '/forbidden',
        skipIssuerCheck: true,
        strictDiscoveryDocumentValidation: false,
        requireHttps: false,
        responseType: 'code'
    }
};
