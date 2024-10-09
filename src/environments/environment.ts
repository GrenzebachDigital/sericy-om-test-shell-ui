export const environment = {
    production: false,
    baseHrefWithDomain: 'http://localhost:4202/sericy-om-test-shell-ui',
    baseHref: '/sericy-om-test-shell-ui/',
    appName: 'Sericy OM Test Shell Ui',
    domainUrl: 'https://edge01.local.sericy.io',
    identityServerConfig: {
        issuer: 'https://edge01.local.sericy.io/sericy-security-api',
        redirectUri: 'http://localhost:4202/sericy-om-test-shell-ui',
        clientId: 'sericy-om-test-shell-ui',
        scope: 'openid profile offline_access email sericy-security-api sericy-settings-api sericy-internationalization-frontend-api sericy-om-orders-manager-api',
        postLogoutRedirectUri: 'http://localhost:4202/sericy-om-test-shell-ui',
        unauthorizedUrl: '/forbidden',
        skipIssuerCheck: true,
        strictDiscoveryDocumentValidation: false,
        requireHttps: false,
        responseType: 'code'
    },
  moduleFederationDomain: 'https://edge01.local.sericy.io'
};
