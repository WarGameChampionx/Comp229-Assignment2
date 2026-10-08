// Demonstrates client-side JWT sign-out.

let accessToken = null;

// Simulate a token received after sign-in.
function signIn(token) {
    accessToken = token;
    console.log("Token stored:", accessToken !== null);
}

// Sign out by removing the token.
function signOut() {
    accessToken = null;
    console.log("Token removed:", accessToken === null);
}

// Demonstrate the sign-in/sign-out process.
// This placeholder is not a real JWT.
signIn("example-test-token");

signOut();