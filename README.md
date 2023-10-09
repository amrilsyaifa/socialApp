This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Answer

## A:

1. If we click the more button, does it go straight to post details or displays all text on the feedscreen (like collapsible)
2. should we implement VirtualizedList + infinite scroll? i think in feedscreen we have a lot off data
3. i think we need to handle multiple image list let say we have 10 image so we need to fetch image 1 by 1. or we need to limit maximum image let say 3. what do you think

## C1:

### Data Structure:

```
1. User Database: Maintain a database containing user profiles with information such as user ID, name, profile picture, friend list, and a list of communities each user is a part of.

2. Community Database: Create a database that stores information about communities, including community ID, members, topics discussed, and other relevant details.

3. Connection Graph: Build a connection graph that connects users to other users they are friends with or have some form of connection. This can be implemented using a graph data structure where nodes represent users, and edges represent connections between users.
```

### Algorithm for Recommendations:

```
To suggest people users might know efficiently, consider the following approaches:

1. Collaborative Filtering: Utilize collaborative filtering techniques to recommend people based on the connections and communities of similar users. You can use matrix factorization or item-based collaborative filtering.

2. Common Communities: Suggest users who are part of the same communities as the user or have joined communities with similar interests. You can calculate community similarity based on community topics and members.

3. Graph Analysis: Explore the connection graph to suggest people who are a few degrees away from the user in the social network. You can use algorithms like breadth-first search or depth-first search to traverse the graph efficiently.
```

### Testing the Feature:

```
1. A/B Testing: Implement A/B testing by randomly assigning users to two groups: one with the "people you might know" feature enabled and one with it disabled. Compare user engagement, click-through rates, and friend requests received to evaluate the feature's impact.

2. Metrics and Analytics: Track metrics such as the click-through rate, user engagement, and the number of new connections made through the feature to assess its effectiveness.

3. User Feedback: Encourage users to provide feedback on the feature through in-app surveys or feedback forms to gather qualitative insights.

4. Load Testing: Ensure that the feature can handle a large number of users and communities by conducting load testing to simulate peak usage scenarios.

5. Privacy and Security Testing: Thoroughly test the feature to ensure that user data is handled securely and that there are no privacy breaches.
```

## C2:

```
1. i think we need to create database to mapping user ex: like hoby, interest, and folower
2. after that we can query the data. but the problem is the leak data, but we can handle use caching in server like redis
```
