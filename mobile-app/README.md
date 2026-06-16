# Global Trust SG — Mobile App (Expo)

This is a minimal Expo React Native app that provides a simple maintenance screen and quick actions to call or WhatsApp the business.

Quick start

1. Install Expo CLI (if not installed):

```bash
npm install --global expo-cli
```

2. Install dependencies:

```bash
cd mobile-app
npm install
```

3. Run on your device or simulator:

```bash
npm run start
# then press 'a' for Android, 'i' for iOS, or scan the QR with the Expo Go app
```

Build for stores

- For a quick build and publish, follow Expo's docs: https://docs.expo.dev
- To produce store-ready binaries, use EAS Build (recommended): https://docs.expo.dev/eas/

Notes

- This app is intentionally standalone and does not modify `index.html` in the website folder.
- Update `PHONE` and `WHATSAPP` in `App.js` if your contact changes.
