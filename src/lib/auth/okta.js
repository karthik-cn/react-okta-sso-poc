import { OktaAuth } from '@okta/okta-auth-js';

const oktaConfig = Object.freeze({
  issuer: 'https://dev-36633455.okta.com/oauth2/default',
  clientId: '0oa2o2locxmz0EPDC5d7',
  redirectUri: window.location.origin + '/login/callback',
});

const oktaAuthConfig = new OktaAuth(oktaConfig);

export default oktaAuthConfig;