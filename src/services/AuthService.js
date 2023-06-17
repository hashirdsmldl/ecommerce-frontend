const AuthServices = {
  loginUser: async function (body) {
        const loginResponse = await fetch('https://authapitest-production.up.railway.app/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        });
        return loginResponse;
    },

    registerUser:async function(body)
    {
       
        const signupResponse = await fetch('https://authapitest-production.up.railway.app/auth/signup',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        });
        return signupResponse;
    }
}
export default AuthServices;