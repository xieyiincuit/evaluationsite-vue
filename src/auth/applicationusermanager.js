import { UserManager } from 'oidc-client'

class ApplicationUserManager extends UserManager {
    constructor() {
        super({
            authority: 'http://localhost:5105',
            client_id: 'evaluationsitevuejs',
            redirect_uri: 'http://localhost:3000/callback',
            response_type: 'id_token token',
            scope: 'openid profile email eval-write ordering-buy role-approve offline_access',
            post_logout_redirect_uri: 'http://localhost:3000/',
            accessTokenExpiringNotificationTime: 10,
            automaticSilentRenew: true,
            filterProtocolClaims: true,
            loadUserInfo: true
        })
    }

    async login() {
        await this.signinRedirect()
        return this.getUser()
    }

    async logout() {
        return this.signoutRedirect()
    }
}

const applicationUserManager = new ApplicationUserManager()
export { applicationUserManager as default }