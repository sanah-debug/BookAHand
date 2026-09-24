# Book-A-Hand — React Native conversion

This is a React Native + Expo conversion of the Figma Make React/Vite BookAHand project.

## Target
- Expo SDK 57
- React Native 0.86
- React 19.2
- TypeScript
- React Navigation
- Android + iOS

## Important
This project intentionally does **not** use HTML, CSS, Tailwind, React DOM, Vite, or NativeWind. The UI uses React Native primitives such as `View`, `Text`, `Pressable`, `TextInput`, `Image`, `ScrollView`, `FlatList`, and `StyleSheet`.

The conversion keeps the original app concept, colors, service categories, provider cards, authentication flow, customer flow, provider flow, booking screens, chat, notifications, and mock data. Backend features such as real authentication, OTP, payments, maps, notifications, and database/API integration are still prototype placeholders.

## Install in the fresh Expo SDK 57 project
If you already created `Book-A-Hand` with `create-expo-app`, copy the files from this ZIP into that project, replacing the starter `App.tsx` and adding the `src` folder. Then install the navigation dependencies:

```bash
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context @expo/vector-icons
```

Then run:

```bash
npx expo start
```

## Why this is different from the original Figma project
The original project is a React + Vite web application. Its `<div>`, `<button>`, `<input>`, CSS/Tailwind classes, browser scrolling, and Vite entrypoint were not copied into this project. They were replaced with React Native equivalents so the result is a genuine mobile app.
