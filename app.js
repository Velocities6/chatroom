```javascript
const SUPABASE_URL = "https://jovnakjxxdjnegxlzesv.supabase.co";

const SUPABASE_KEY = "sb_publishable_wYgBDXUIlf1bFjaErHwDWQ_qyzPM0RV";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginButton = document.getElementById("loginButton");
const errorText = document.getElementById("error");

loginButton.addEventListener("click", async () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    errorText.textContent = "";

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

    if (error) {
        errorText.textContent = error.message;
        return;
    }

    window.location.href = "chat.html";
});
```
