# Google reCAPTCHA V3 Error

## Google reCAPTCHA V3 Not Working

It may happen that after switching to reCAPTCHA V3 or during a reconfiguration, the Captcha function seemingly fails without a visible error message appearing in the shop.

#### Symptoms

* **Button behavior:** When clicking a button (e.g., in the contact form or during registration), it is briefly deactivated (grayed out) and reactivated after a few seconds.
* **No action:** Nothing else happens. No postback takes place, the form is not submitted, and there is no log entry in the system log.
* **Browser Console:** If you open the browser developer tools (F12 key) and look at the **Console**, you will see an error indicating that the URL `https://www.google.com/recaptcha/api.js` could not be loaded.
  * Error message: `400 ERR_BLOCKED_BY_ORB` or `NS_ERROR_CORRUPTED_CONTENT`

#### Cause

The most likely cause is a discrepancy in the Google API Key configuration.

Often, an existing key originally created for **reCAPTCHA V2 (Checkbox challenge)** was used for V3. In the Google Cloud Console, the type "Website • Checkbox challenge" is often still assigned to this key. This type usually cannot be changed to V3 retroactively and is incompatible with the V3 integration method, causing the script to be blocked.

#### Solution

The key type must strictly match the integration method.

1. Log in to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
2. Do not try to edit the old key. Instead, create a completely **new key** using the **plus symbol (+)** in the top right corner.
3. Explicitly select the type **reCAPTCHA v3** during creation.
4. Enter your domains and save.
5. Copy the new **Site Key** and **Secret Key**.
6. Enter these new keys in your Smartstore configuration.

The reCAPTCHA should now load correctly and process requests immediately.
