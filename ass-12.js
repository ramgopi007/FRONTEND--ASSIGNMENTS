/*  🚀 Day 12: JavaScript Primitives & for Loops - Instagram Style

Today's Goal: Learn data types and for loops by building Instagram-like features!

---

🎯 What You're Learning Today

Core Concepts:
- Primitive vs Non-primitive data types
- for loops for counting and repetition
- Assignment: Build Instagram features with for loops

---

📱 Learning with Instagram Examples

🎯 What Instagram Uses for Loops For

Counting & Displaying:
- Show 10 posts in your feed
- Count likes from 0 to final number
- Display story timer from 15 to 0 seconds
- Load profile photos one by one
- Show hashtags for each post

---

📊 Primitive vs Non-Primitive Data Types

🎯 Instagram Data Examples

Primitive Types (Single Values):

1. String (Text)

let username = "john_doe";
let caption = "Beautiful sunset!";
let hashtag = "sunset";


2. Number (Counts)

let likes = 42;
let followers = 1250;
let posts = 89;


3. Boolean (True/False)

let isFollowing = true;
let isLiked = false;
let isVerified = true;


Non-Primitive Types (Multiple Values):

1. Array (Lists)

let hashtags = ["sunset", "beautiful", "nature"];
let posts = ["post1", "post2", "post3"];


Key Difference:
- Primitive: Single value (like one like count)
- Non-primitive: Multiple values (like list of hashtags)

---

🔄 for Loops: Instagram Repetition

🎯 Basic for Loop Structure


for (let i = 1; i <= 5; i++) {
    console.log("Post " + i);
}


Parts Explained:
- `let i = 1` → Start counting from 1
- `i <= 5` → Keep going until 5
- `i++` → Add 1 each time (same as i = i + 1)

🎯 Instagram for Loop Examples

Loading Feed Posts:

for (let i = 1; i <= 10; i++) {
    console.log("📱 Loading post " + i);
}


Story Timer Countdown:

for (let seconds = 15; seconds >= 1; seconds--) {
    console.log("⏰ Story time: " + seconds + " seconds");
}


Counting Likes Animation:

for (let likes = 0; likes <= 100; likes = likes + 10) {
    console.log("❤️ Likes: " + likes);
}


---

🎯 ASSIGNMENT: Instagram Features with for Loops

📋 Problem Set 1: Data Types - Instagram Profile (5 problems)

Problem 1.1: Instagram Profile Variables

// Create your Instagram profile data

let username = ram__ssmb;        // Your username (string)
let followers = 99;       // Follower count (number)  
let following = 101;       // Following count (number)
let posts = 20;           // Posts count (number)
let isVerified = true;      // Blue tick (boolean)
let bio = "About my self like my name and my  point of interset , and ohter details";             // Bio text (string)

console.log("👤 Username:", username);
console.log("👥 Followers:", followers);
console.log("👥 Following:", following);
console.log("📸 Posts:", posts);
console.log("✅ Verified:", isVerified);
console.log("📝 Bio:", bio);

// Questions:
// Which variables hold single values (primitive)? 
{1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Bigint
7.Symbol}
// Which variables hold multiple values (non-primitive)? 
{1.Arrays
2.Objects}


Problem 1.2: Post Data Types

// Single Instagram post information

let postId = 12345;
let postCaption = "Amazing sunset! 🌅";
let postLikes = 156;
let postComments = 23;
let isSponsored = false;
let postDate = "2024-01-15";

console.log("🆔 Post ID:", postId); {12345}
console.log("📝 Caption:", postCaption);  {"Amazing sunset!"}
console.log("❤️ Likes:", postLikes); {156}
console.log("💬 Comments:", postComments); {23}
console.log("💰 Sponsored:", isSponsored); {false}
console.log("📅 Date:", postDate); {"2024-01-15"}

// Identify the data type of each variable:
// postId is a ??? type          {Number}
// postCaption is a ??? type     {String}
// postLikes is a ??? type       {Number}
// isSponsored is a ??? type     {boolean}


Problem 1.3: Story Information

// Instagram story data

let storyOwner = "travel_blogger";
let storyViews = 245;
let storyDuration = 15;
let hasMusic = true;
let storyType = "photo";

// Change some values (simulate user interaction)
storyViews = storyViews + 1;    // Someone viewed the story
storyDuration = storyDuration - 1;  // Timer countdown
hasMusic = false;               // Music turned off

console.log("👤 Story owner:", storyOwner); {travel_blogger}
console.log("👁️ Views:", storyViews);      // Should be {246}
console.log("⏰ Duration:", storyDuration); // Should be {14}
console.log("🎵 Has music:", hasMusic);     // Should be {false}

// Can you change these values? Why? 
{Because we are using the keyword "let" , that's why in javascript the 
let keyword we cannot redefined but we can reassign the value so, that's why we change the values }


Problem 1.4: Like Button Data

// Instagram like button simulation

let isLiked = false;
let likeCount = 99;
let heartColor = "gray";

console.log("Before like:");
console.log("❤️ Liked:", isLiked); {false}
console.log("📊 Count:", likeCount); {99}
console.log("🎨 Heart color:", heartColor); {gray}

// User clicks like button
isLiked = true;
likeCount = likeCount + 1;
heartColor = "red";

console.log("After like:");
console.log("❤️ Liked:", isLiked);             // Should be: {true}
console.log("📊 Count:", likeCount);           // Should be: {100}
console.log("🎨 Heart color:", heartColor);    // Should be: {red}


Problem 1.5: Array vs Single Values

// Compare single values vs arrays

// Single hashtag (primitive)
let singleHashtag = "sunset";
console.log("Single hashtag:", singleHashtag); {sunset}

// Multiple hashtags (non-primitive)
let hashtagList = ["sunset", "beach", "vacation"];
console.log("Hashtag list:", hashtagList);  {Hashtag list: [ 'sunset', 'beach', 'vacation' ]}

// Single username (primitive)
let username = "john_doe";
console.log("Username:", username); {john-doe}

// Multiple usernames (non-primitive)  
let followersList = ["alice", "bob", "charlie"];
console.log("Followers list:", followersList); {followersList: ['alice' , 'bob' , 'charlie']}

// Questions:
// singleHashtag is ??? type {String}
// hashtagList is ??? type   {Array}
// username is ??? type  {String}
// followersList is ??? type {Array}


📋 Problem Set 2: Basic for Loops - Instagram Counting (5 problems)

Problem 2.1: Load Instagram Feed

// Load 8 posts in Instagram feed

console.log("📱 Loading Instagram feed...");

for (let i = 1; i <= 8; i++) {
    console.log("📸 Post " + i + " loaded");
}

console.log("✅ Feed loaded completely!");

// Fill in the number to load 8 posts
// Expected output: Post 1 loaded, Post 2 loaded, ..., Post 8 loaded


Problem 2.2: Story Timer

// Instagram story 10-second countdown

console.log("📱 Story starting...");

for (let time = 10; time >= 0; time--) {
    console.log("⏰ " + time + " seconds left");
}

console.log("📱 Story ended!");

// Fill in the ending condition to countdown from 10 to 1
// Expected: 10 seconds left, 9 seconds left, ..., 1 seconds left


Problem 2.3: Count Followers

// Show follower milestones

console.log("🎉 Follower milestones:");

for (let followers = 100; followers <= 1000; followers = followers + 100) {
    console.log("🎯 Reached " + followers + " followers!");
}

// Fill in the increment to show: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
// How much should we add each time? {100 we should add the time for the followers for the each time}


Problem 2.4: Like Animation

// Animate likes increasing from 50 to 60

console.log("❤️ Like animation:");

for (let likes = 50; likes <= 60 ; likes++) {
    console.log("❤️ Likes: " + likes); 
}

console.log("✨ Animation complete!");

// Fill in the ending number to animate from 50 to 60
// Expected: Likes: 50, Likes: 51, ..., Likes: 60


Problem 2.5: Display Post Numbers

// Show posts numbered 1 to 5

console.log("📸 Your recent posts:");

for (let postNum = 1; postNum <= 5; postNum++) {
    console.log("Post " + postNum);
}

// Fill in starting number to show: Post 1, Post 2, Post 3, Post 4, Post 5
// What number should we start from? {we have to start from the 1 number because the intial post number starts from 1 only}


📋 Problem Set 3: for Loops with Calculations (5 problems)

Problem 3.1: Total Likes Counter

// Count total likes across multiple posts

let post1Likes = 45;
let post2Likes = 67;
let post3Likes = 23;

let totalLikes = 0;

// Add each post's likes to total (without loops first)
totalLikes = totalLikes + post1Likes;
totalLikes = totalLikes + post2Likes;
totalLikes = totalLikes + post3Likes;

console.log("Total likes (manual):", totalLikes);

{The above one ok but i can do in these manner without using the loops as:
 totalLikes = post1Likes + post2Likes + post3Likes ;
console.log("Total likes (manual):" ,totalLikes ) ; }

// Now using array and for loop
let allLikes = [45, 67, 23];
let total = 0;

for (let i = 0; i < 3; i++) {
    total = total + allLikes[i];
    console.log("Adding post " + (i + 1) + " likes: " + allLikes[i]);
}

console.log("Total likes (loop):", total); {135}

// Fill in the array index and both totals should be: ???


Problem 3.2: Story Views Counter

// Count story views over 5 days

let day1Views = 120;
let day2Views = 89;
let day3Views = 156;
let day4Views = 203;
let day5Views = 178;

let totalViews = 0;

// Method 1: Add manually
totalViews = day1Views + day2Views + day3Views + day4Views + day5Views;
console.log("Total views (manual):", totalViews); {746}

// Method 2: Using array and loop
let dailyViews = [120, 89, 156, 203, 178];
let total = 0;

for (let day = 0; day < 5; day++) {
    total = total + dailyViews[day];
    console.log("Day " + (day + 1) + ": " + dailyViews[day] + " views");
}

console.log("Total views (loop):", total);

// Fill in the loop condition: day < {5 is the loop condition }
// Both totals should equal: {yes both totals are equal }


Problem 3.3: Engagement Rate

// Calculate average likes per post

let postLikes = [34, 67, 45, 89, 23];
let totalLikes = 0;
let postCount = 5;

for (let i = 0; i < postCount; i++) {
    totalLikes = totalLikes + postLikes[i];
    console.log("Post " + (i + 1) + " has " + postLikes[i] + " likes");
}

let averageLikes = totalLikes / postCount;

console.log("📊 Total likes:", totalLikes); { 258 }
console.log("📊 Average likes per post:", averageLikes); { 51.6}

// Calculate what totalLikes should be: {256}
// Calculate what averageLikes should be: {51.6}


Problem 3.4: Hashtag Counter

// Count characters in hashtags

let hashtags = ["sunset", "beach", "vacation", "summer"];
let totalCharacters = 0;

console.log("📝 Hashtag analysis:");

for (let i = 0; i < 4; i++) {
    let hashtagLength = hashtags[i].length;
    totalCharacters = totalCharacters + hashtagLength;
    
    console.log("" + hashtags[i] + " has " + hashtagLength + " characters");
}

console.log("📊 Total characters in all hashtags:", totalCharacters);

// Calculate manually:
// "sunset" = {6} characters
// "beach" = {5} characters  
// "vacation" = {8} characters
// "summer" = {6} characters
// Total = 25 characters


Problem 3.5: Growth Tracking

// Track follower growth over time

let startingFollowers = 100;
let dailyGrowth = 25;  // New followers per day
let days = 7;

console.log("📈 Weekly follower growth:");
console.log("Day 0: " + startingFollowers + " followers");

for (let day = 1; day <= days; day++) {
    let currentFollowers = startingFollowers + (day * dailyGrowth);
    console.log("Day " + day + ": " + currentFollowers + " followers");
}

let finalFollowers = startingFollowers + (days * dailyGrowth);
console.log("📊 Total growth: " + (finalFollowers - startingFollowers) + " new followers");

// Calculate final follower count: 100 + (7 × 25) = ???


📋 Problem Set 4: for Loops with Arrays (5 problems)

Problem 4.1: Display User Posts

// Show all posts in user profile

let userPosts = ["Beach vacation", "Coffee morning", "Workout session"];

console.log("📸 Your posts:");

for (let i = 0; i < 3; i++) {
    console.log((i + 1) + ". " + userPosts[i]);
}

// Fill in array length and index
// Expected output:
// 1. Beach vacation
// 2. Coffee morning  
// 3. Workout session


Problem 4.2: Story Highlights

// Display story highlight categories

let highlights = ["Travel", "Food", "Fitness", "Work", "Friends"];

console.log("✨ Story highlights:");

for (let i = 0; i < highlights.length; i++) {
    console.log("📁 " + highlights[i] + " highlight");
}

// What will highlights.length equal? {5}
// How many highlights will be displayed? {All the highlights are should be displayed}


Problem 4.3: Follower Usernames

// Display recent followers

let recentFollowers = ["alice_wonder", "bob_builder", "charlie_chef", "diana_dancer"];

console.log("👥 Recent followers:");

for (let i = 0; i < recentFollowers.length; i++) {
    console.log("👤 @" + recentFollowers[i] + " started following you");
}

// Fill in the array property to get length {The property is .length }
// How many followers will be displayed? {All the follewers should be displayed}


Problem 4.4: Hashtag Display

// Show all hashtags for a post

let postHashtags = ["nature", "photography", "sunset", "beautiful", "peaceful"];

console.log("📝 Post hashtags:");

for (let i = 0; i < 5; i++) {
    console.log("" + postHashtags[i]);
}

// Expected output:
// nature
// photography
// sunset
// beautiful
// peaceful

// Rewrite using .length instead of 5:
for (let i = 0; i < postHashtags.length; i++) {
    console.log("" + postHashtags[i]);
}


Problem 4.5: Comment Display

// Show comments on a post

let comments = ["Amazing photo! 😍", "Love this! ❤️", "So beautiful!", "Great shot! 📸"];

console.log("💬 Comments (" + comments.length + "):");

for (let i = 0; i < comments.length; i++) {
    console.log("💬 Comment " + (i + 1) + ": " + comments[i]);
}

// Fill in the array index
// Expected output:
// 💬 Comment 1: Amazing photo! 😍
// 💬 Comment 2: Love this! ❤️
// 💬 Comment 3: So beautiful!
// 💬 Comment 4: Great shot! 📸


📋 Problem Set 5: Advanced for Loop Patterns (5 problems)

Problem 5.1: Even-Odd Post Numbers

// Alternate between regular and sponsored posts

console.log("📱 Instagram feed:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("📸 Post " + i + " (Sponsored)");
    } else {
        console.log("📸 Post " + i + " (Regular)");
    }
}

// Explain the pattern:
// Post 1: {Regular} (Regular or Sponsored?)
// Post 2: {Sponsored} (Regular or Sponsored?)
// Post 3: {Regular} (Regular or Sponsored?)


Problem 5.2: Skip Pattern Display

// Show every 3rd post for quick preview

console.log("🔍 Quick post preview:");

for (let i = 3; i <= 15; i = i + 3) {
    console.log("👀 Preview post " + i);
}

// Fill in the increment to show posts: 3, 6, 9, 12, 15
// What number should we add each time? {for each time we should increment the 3 times as the time }


Problem 5.3: Reverse Story Order

// Display stories in reverse order (newest first)

let stories = ["Morning coffee", "Lunch break", "Evening walk", "Night reading"];

console.log("📱 Stories (newest first):");

for (let i = stories.length - 1; i >= 0; i--) {
    console.log("📖 Story " + (stories.length - i) + ": " + stories[i]);
}

// Fill in the array index
// Expected order: Night reading, Evening walk, Lunch break, Morning coffee


Problem 5.4: Engagement Levels

// Categorize posts by like count

let likeCounts = [45, 120, 78, 200, 89, 156];

console.log("📊 Post engagement analysis:");

for (let i = 0; i < likeCounts.length; i++) {
    let likes = likeCounts[i];
    let postNumber = i + 1;
    
    if (likes >= 150) {
        console.log("🔥 Post " + postNumber + ": " + likes + " likes (High engagement)");
    } else if (likes >= 100) {
        console.log("👍 Post " + postNumber + ": " + likes + " likes (Good engagement)");
    } else {
        console.log("📈 Post " + postNumber + ": " + likes + " likes (Growing)");
    }
}

// Predict the categories:
// Post 1 (45 likes): console.log("📈 Post " + postNumber + ": " + likes + " likes (Growing)");
// Post 2 (120 likes): console.log("👍 Post " + postNumber + ": " + likes + " likes (Good engagement)");
// Post 4 (200 likes): console.log("🔥 Post " + postNumber + ": " + likes + " likes (High engagement)");


Problem 5.5: Weekly Activity Summary

// Summarize weekly Instagram activity

let dailyPosts = [2, 1, 3, 0, 2, 4, 1];
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("📅 Weekly activity summary:");

let totalPosts = 0;
let mostActiveDay = "";
let maxPosts = 0;

for (let i = 0; i < 7; i++) {
    let posts = dailyPosts[i];
    let day = dayNames[i];
    
    console.log(day + ": " + posts + " posts");
    
    totalPosts = totalPosts + posts;
    
    if (posts > maxPosts) {
        maxPosts = posts;
        mostActiveDay = day;
    }
}

console.log("📊 Total posts this week: " + totalPosts);
console.log("🏆 Most active day: " + mostActiveDay + " (" + maxPosts + " posts)");

// Calculate manually:
// Total posts: 2+1+3+0+2+4+1 = 13
// Most active day: {Saturday} {4 posts}


---

🧪 Testing Your Instagram Features

📝 Instagram Testing Template

html
<!DOCTYPE html>
<html>
<head>
    <title>Instagram for Loops - JavaScript Practice</title>
</head>
<body>
    <h1>📱 Instagram Features</h1>
    <p>Check the Console (F12) to see your Instagram features!</p>
    
    <script>
        console.log("📱 Welcome to Instagram!");
        console.log("=== Problem 1.1: Profile Variables ===");
        
        // Paste your problem code here
        
        console.log("=== Problem 1.2: Post Data ===");
        
        // Continue for all problems...
    </script>
</body>
</html>


---

🎯 Assignment Checklist

✅ Complete All 25 Instagram Problems

Problem Set 1: Data Types - Instagram Profile (5 problems)
-  Problem 1.1: Instagram Profile Variables
-  Problem 1.2: Post Data Types
-  Problem 1.3: Story Information
-  Problem 1.4: Like Button Data
-  Problem 1.5: Array vs Single Values

Problem Set 2: Basic for Loops - Instagram Counting (5 problems)
-  Problem 2.1: Load Instagram Feed
-  Problem 2.2: Story Timer
-  Problem 2.3: Count Followers
-  Problem 2.4: Like Animation
-  Problem 2.5: Display Post Numbers

Problem Set 3: for Loops with Calculations (5 problems)
-  Problem 3.1: Total Likes Counter
-  Problem 3.2: Story Views Counter
-  Problem 3.3: Engagement Rate
-  Problem 3.4: Hashtag Counter
-  Problem 3.5: Growth Tracking

Problem Set 4: for Loops with Arrays (5 problems)
-  Problem 4.1: Display User Posts
-  Problem 4.2: Story Highlights
-  Problem 4.3: Follower Usernames
-  Problem 4.4: Hashtag Display
-  Problem 4.5: Comment Display

Problem Set 5: Advanced for Loop Patterns (5 problems)
-  Problem 5.1: Even-Odd Post Numbers
-  Problem 5.2: Skip Pattern Display
-  Problem 5.3: Reverse Story Order
-  Problem 5.4: Engagement Levels
-  Problem 5.5: Weekly Activity Summary




 */