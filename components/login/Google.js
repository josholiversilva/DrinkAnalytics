import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

const Google = () => {
    return (
        <>
            <GoogleLogin
                isSignedIn={true}
                clientId="290575140718-7i94ac4uhbn0gvu6akju74hb0qc893bp.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="mb-4" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default Google;