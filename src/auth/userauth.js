import applicationUserManager from "./applicationusermanager";

const userAuth = {
    data() {
        return {
            user: {
                nickname: "",
                isAuthenticated: false
            }
        };
    },
    methods: {
        async refreshUserInfo() {
            const userIds = await applicationUserManager.getUser();
            if (userIds) {
                this.user.nickname = userIds.profile.nickname;
                this.user.isAuthenticated = true;
                var exdate = this.formatUnixtimestamp(userIds.expires_at);
                console.log('userInfo refresh exdate is', exdate)
                this.$store.commit("identity/saveUserInfo", userIds);
                window.localStorage.setItem("USER_EXP", exdate);
                window.localStorage.setItem("USER_NICKNAME", this.user.nickname);
                window.localStorage.setItem("ACCESS_TOKEN", userIds.access_token);
            } else {
                this.user.nickname = "";
                this.user.isAuthenticated = false;
            }
        },
        //将时间戳转换为2022-03-15 15:50:19的时间
        formatUnixtimestamp(unixtimestamp) {
            if (!unixtimestamp) {
                return unixtimestamp;
            }
            var unixtimestamp = new Date(unixtimestamp * 1000);
            var year = 1900 + unixtimestamp.getYear();
            var month = "0" + (unixtimestamp.getMonth() + 1);
            var date = "0" + unixtimestamp.getDate();
            var hour = "0" + unixtimestamp.getHours();
            var minute = "0" + unixtimestamp.getMinutes();
            var second = "0" + unixtimestamp.getSeconds();
            return (
                year +
                "-" +
                month.substring(month.length - 2, month.length) +
                "-" +
                date.substring(date.length - 2, date.length) +
                " " +
                hour.substring(hour.length - 2, hour.length) +
                ":" +
                minute.substring(minute.length - 2, minute.length) +
                ":" +
                second.substring(second.length - 2, second.length)
            );
        },
        async login() {
            try {
                await applicationUserManager.login()
            } catch (error) {
                console.log('login in occured error: ', error)
                this.$message.error(error)
            }
        },
        async logout() {
            try {
                window.localStorage.removeItem('USER_NICKNAME')
                window.localStorage.removeItem('ACCESS_TOKEN')
                window.localStorage.removeItem('USER_EXP')
                await applicationUserManager.logout()
                this.$store.commit('identity/saveToken', '')
                this.$store.commit('identity/saveUserInfo', {})
            } catch (error) {
                console.log('logout in occured error: ', error)
                this.$message.error(error)
            }
        }
    },
    async created() {
        await this.refreshUserInfo();
    }
};
export default userAuth;