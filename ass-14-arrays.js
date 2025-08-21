/* 🎬 JavaScript Array Methods - BookMyShow Style

Today's Goal: Master essential array methods through BookMyShow movie booking examples!



🎯 What You're Learning Today

Core Array Methods:
- push() - Add movies to lists
- pop() - Remove last movie  
- slice() - Get movie sections
- splice() - Modify movie lists
- filter() - Find specific movies
- Assignment: Build BookMyShow features step by step



🎬 BookMyShow Array Methods

🎯 How BookMyShow Uses Arrays

Movie Lists Everywhere:
- Now Showing: Array of current movies
- Coming Soon: Array of upcoming movies
- User Watchlist: Array of saved movies
- Booked Tickets: Array of user bookings
- Theater Showtimes: Array of movie timings



📝 Array Method 1: push() - Add Items

🎯 What push() Does

push() = Add new items to the END of an array

Basic Syntax:

arrayName.push(newItem);
arrayName.push(item1, item2, item3); // Add multiple items


🎯 BookMyShow Examples

Example 1: Add Movies to Watchlist

let myWatchlist = ["Avengers", "RRR"];

console.log("Before:", myWatchlist);
// Output: ["Avengers", "RRR"]

// User adds new movie to watchlist
myWatchlist.push("KGF 2");
console.log("After adding KGF 2:", myWatchlist);
// Output: ["Avengers", "RRR", "KGF 2"]

// Add multiple movies at once
myWatchlist.push("Pushpa", "Spider-Man");
console.log("After adding more:", myWatchlist);
// Output: ["Avengers", "RRR", "KGF 2", "Pushpa", "Spider-Man"]


Example 2: Add New Movies to Theater

let nowShowing = ["Pathaan", "Avatar"];

// Theater adds new releases
nowShowing.push("Ant-Man 3");
nowShowing.push("Scream 6", "John Wick 4");

console.log("Now showing:", nowShowing);
// Output: ["Pathaan", "Avatar", "Ant-Man 3", "Scream 6", "John Wick 4"]




📝 Array Method 2: pop() - Remove Last Item

🎯 What pop() Does

pop() = Remove and return the LAST item from array

Basic Syntax:

let removedItem = arrayName.pop(); // Removes last item and returns it


🎯 BookMyShow Examples

Example 1: Remove Movie from Watchlist

let myWatchlist = ["Avengers", "RRR", "KGF 2"];

console.log("Before:", myWatchlist);
// Output: ["Avengers", "RRR", "KGF 2"]

// User removes last added movie
let removedMovie = myWatchlist.pop();
console.log("Removed movie:", removedMovie);      // "KGF 2"
console.log("After removal:", myWatchlist);       // ["Avengers", "RRR"]


Example 2: Theater Removes Movie

let comingSoon = ["Fast X", "Guardians 3", "Indiana Jones 5"];

// Movie gets postponed - remove from coming soon
let postponedMovie = comingSoon.pop();
console.log("Postponed:", postponedMovie);        // "Indiana Jones 5"
console.log("Still coming:", comingSoon);         // ["Fast X", "Guardians 3"]




📝 Array Method 3: slice() - Get Section Without Modifying

🎯 What slice() Does

slice() = Copy a section of array WITHOUT changing original

Basic Syntax:

let newArray = originalArray.slice(startIndex, endIndex);
// endIndex is NOT included


🎯 BookMyShow Examples

Example 1: Show Top 3 Movies

let allMovies = ["Pathaan", "Avatar", "RRR", "KGF 2", "Pushpa", "Avengers"];

// Get top 3 movies for homepage
let topMovies = allMovies.slice(0, 3);
console.log("Top 3 movies:", topMovies);
// Output: ["Pathaan", "Avatar", "RRR"]

console.log("Original array unchanged:", allMovies);
// Output: ["Pathaan", "Avatar", "RRR", "KGF 2", "Pushpa", "Avengers"]


Example 2: Get Weekend Movies

let weeklyMovies = ["Mon-Movie1", "Tue-Movie2", "Wed-Movie3", "Thu-Movie4", "Fri-Movie5", "Sat-Movie6", "Sun-Movie7"];

// Get weekend movies (Friday to Sunday)
let weekendMovies = weeklyMovies.slice(4, 7);
console.log("Weekend movies:", weekendMovies);
// Output: ["Fri-Movie5", "Sat-Movie6", "Sun-Movie7"]

// Get last 2 movies
let lastTwoMovies = weeklyMovies.slice(-2);
console.log("Last 2 movies:", lastTwoMovies);
// Output: ["Sat-Movie6", "Sun-Movie7"]




📝 Array Method 4: splice() - Add/Remove Items Anywhere

🎯 What splice() Does

splice() = Add or remove items at ANY position (MODIFIES original array)

Basic Syntax:

array.splice(startIndex, deleteCount, newItem1, newItem2);
// startIndex: where to start
// deleteCount: how many to remove
// newItems: what to add (optional)


🎯 BookMyShow Examples

Example 1: Remove Movie from Middle

let movieList = ["Pathaan", "Old Movie", "Avatar", "RRR"];

// Remove "Old Movie" at index 1
movieList.splice(1, 1);
console.log("After removing old movie:", movieList);
// Output: ["Pathaan", "Avatar", "RRR"]


Example 2: Add Movie in Specific Position

let featuredMovies = ["Pathaan", "Avatar"];

// Add "KGF 2" between Pathaan and Avatar
featuredMovies.splice(1, 0, "KGF 2");
console.log("After adding KGF 2:", featuredMovies);
// Output: ["Pathaan", "KGF 2", "Avatar"]


Example 3: Replace Movies

let theaters = ["PVR", "Old Theater", "INOX"];

// Replace "Old Theater" with "Cinepolis"
theaters.splice(1, 1, "Cinepolis");
console.log("Updated theaters:", theaters);
// Output: ["PVR", "Cinepolis", "INOX"]




📝 Array Method 5: filter() - Find Specific Items

🎯 What filter() Does

filter() = Create new array with items that match a condition

Basic Syntax:

let filteredArray = originalArray.filter(function(item) {
    return condition; // true to keep item, false to exclude
});


🎯 BookMyShow Examples

Example 1: Filter Movies by Language

let allMovies = [
    {title: "Pathaan", language: "Hindi"},
    {title: "RRR", language: "Telugu"},
    {title: "Avatar", language: "English"},
    {title: "KGF 2", language: "Hindi"},
    {title: "Pushpa", language: "Telugu"}
];

// Get only Hindi movies
let hindiMovies = allMovies.filter(function(movie) {
    return movie.language === "Hindi";
});

console.log("Hindi movies:", hindiMovies);
// Output: [{title: "Pathaan", language: "Hindi"}, {title: "KGF 2", language: "Hindi"}]


Example 2: Filter by Rating

let movies = [
    {title: "Pathaan", rating: 8.5},
    {title: "Bad Movie", rating: 4.2},
    {title: "Avatar", rating: 9.1},
    {title: "Average Movie", rating: 6.8}
];

// Get movies with rating above 8
let goodMovies = movies.filter(function(movie) {
    return movie.rating > 8;
});

console.log("Highly rated movies:", goodMovies);
// Output: [{title: "Pathaan", rating: 8.5}, {title: "Avatar", rating: 9.1}]


Example 3: Filter Available Showtimes

let showtimes = [
    {time: "10:00 AM", available: true},
    {time: "1:00 PM", available: false},
    {time: "4:00 PM", available: true},
    {time: "7:00 PM", available: false},
    {time: "10:00 PM", available: true}
];

// Get only available showtimes
let availableShows = showtimes.filter(function(show) {
    return show.available === true;
});

console.log("Available showtimes:", availableShows);
// Output: [{time: "10:00 AM", available: true}, {time: "4:00 PM", available: true}, {time: "10:00 PM", available: true}]




🎯 ASSIGNMENT: Build BookMyShow Features

📋 Problem Set 1: push() - Adding Movies (5 problems)

Problem 1.1: Build User Watchlist

// Start with empty watchlist
let userWatchlist = [];

console.log("Initial watchlist:", userWatchlist);

// User adds movies one by one
userWatchlist.push("Spider-Man");  // Add "Spider-Man"
userWatchlist.push("Batman");  // Add "Batman"
userWatchlist.push("Thor");  // Add "Thor"

console.log("After adding movies:", userWatchlist);
// Expected: ["Spider-Man", "Batman", "Thor"]

// User adds multiple movies at once
userWatchlist.push("Iron man", "Captian America");  // Add "Iron Man" and "Captain America"

console.log("Final watchlist:", userWatchlist);
// Expected: ["Spider-Man", "Batman", "Thor", "Iron Man", "Captain America"]


Problem 1.2: Theater Now Showing

let nowShowing = ["Pathaan", "Avatar"];

// Theater adds new releases
nowShowing.push("Ant-Man 3");  // Add "Ant-Man 3"

console.log("Updated now showing:", nowShowing);
// Expected: ["Pathaan", "Avatar", "Ant-Man 3"]

// Add weekend specials
nowShowing.push("RRR", "KGF 2");  // Add "RRR" and "KGF 2"

console.log("With weekend specials:", nowShowing);
// Expected: ["Pathaan", "Avatar", "Ant-Man 3", "RRR", "KGF 2"]


Problem 1.3: Coming Soon List

let comingSoon = [];

// Add upcoming movies
comingSoon.push("Fast X");  // Add "Fast X"
comingSoon.push("Guardians 3");  // Add "Guardians 3"
comingSoon.push("Indiana Jones 5", "Mission Impossoble 7");  // Add "Indiana Jones 5" and "Mission Impossible 7"

console.log("Coming soon movies:", comingSoon);
// Expected: ["Fast X", "Guardians 3", "Indiana Jones 5", "Mission Impossible 7"]


Problem 1.4: User Booking History

let bookingHistory = ["Pathaan - Jan 15", "Avatar - Jan 20"];

// User books more movies
bookingHistory.push("RRR - Feb 5");  // Add "RRR - Feb 5"
bookingHistory.push("KGF 2 - Feb 12");  // Add "KGF 2 - Feb 12"

console.log("Booking history:", bookingHistory);
// Expected: ["Pathaan - Jan 15", "Avatar - Jan 20", "RRR - Feb 5", "KGF 2 - Feb 12"]


Problem 1.5: Theater Showtimes

let showtimes = ["10:00 AM", "1:00 PM"];

// Add evening shows
showtimes.push("4:00 PM");  // Add "4:00 PM"
showtimes.push("7:00 PM", "10:00 PM");  // Add "7:00 PM" and "10:00 PM"

console.log("All showtimes:", showtimes);
// Expected: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]


📋 Problem Set 2: pop() - Removing Movies (5 problems)

Problem 2.1: Remove from Watchlist

let watchlist = ["Avengers", "Spider-Man", "Batman", "Superman"];

console.log("Original watchlist:", watchlist);

// User removes last added movie
let removedMovie = watchlist.pop();
console.log("Removed movie:", removedMovie);     // Should be: Superman
console.log("Updated watchlist:", watchlist);     // Should be: ["Avengers" , "Spider-Man" , "Batman"]

// Remove another movie
let anotherRemoved = watchlist.pop();
console.log("Removed movie:", anotherRemoved);    // Should be: Batman
console.log("Final watchlist:", watchlist);       // Should be: ["Avengers", "Spider-Man"]


Problem 2.2: Theater Removes Movie

let nowShowing = ["Pathaan", "Avatar", "Old Movie"];

// Theater removes the last movie (it's old)
let removedFromTheater = nowShowing.pop();
console.log("Removed from theater:", removedFromTheater);  // Should be: Old Movie
console.log("Still showing:", nowShowing);                 // Should be: ["Pathaan", "Avatar"]


Problem 2.3: Cancel Last Booking

let recentBookings = ["Movie A", "Movie B", "Movie C", "Wrong Booking"];

// User cancels last booking (it was wrong)
let cancelledBooking = recentBookings.pop();
console.log("Cancelled:", cancelledBooking);     // Should be: Wrong Booking
console.log("Valid bookings:", recentBookings);  // Should be: ["Movie A", "Movie B", "Movie C"]


Problem 2.4: Remove Last Showtime

let showtimes = ["10 AM", "1 PM", "4 PM", "7 PM", "Late Night"];

// Remove late night show (not enough audience)
let removedShow = showtimes.pop();
console.log("Removed showtime:", removedShow);   // Should be: Late Night
console.log("Available times:", showtimes);      // Should be: ["10 AM", "1 PM", "4 PM", "7 PM"]


Problem 2.5: Coming Soon Updates

let comingSoon = ["Movie A", "Movie B", "Movie C", "Postponed Movie"];

// Last movie gets postponed
let postponed = comingSoon.pop();
console.log("Postponed movie:", postponed);      // Should be: Postponed Movie
console.log("Still coming soon:", comingSoon);   // Should be: ["Movie A", "Movie B", "Movie C"]


📋 Problem Set 3: slice() - Get Sections (5 problems)

Problem 3.1: Top Movies Display

let allMovies = ["Pathaan", "Avatar", "RRR", "KGF 2", "Pushpa", "Avengers", "Spider-Man"];

// Get top 3 movies for homepage
let topMovies = allMovies.slice(0, 3);
console.log("Top 3 movies:", topMovies);
// Expected: ["Pathaan", "Avatar", "RRR"]

// Get next 3 movies
let nextMovies = allMovies.slice(3, 6);
console.log("Next 3 movies:", nextMovies);
// Expected: ["KGF 2", "Pushpa", "Avengers"]

console.log("Original array unchanged:", allMovies);
// Should still have all 7 movies


Problem 3.2: Weekend Showtimes

let weeklyShows = ["Mon-Show", "Tue-Show", "Wed-Show", "Thu-Show", "Fri-Show", "Sat-Show", "Sun-Show"];

// Get weekend shows (Friday to Sunday)
let weekendShows = weeklyShows.slice(4, 7);
console.log("Weekend shows:", weekendShows);
// Expected: ["Fri-Show", "Sat-Show", "Sun-Show"]

// Get weekday shows (Monday to Friday)
let weekdayShows = weeklyShows.slice(0, 5);
console.log("Weekday shows:", weekdayShows);
// Expected: ["Mon-Show", "Tue-Show", "Wed-Show", "Thu-Show", "Fri-Show"]


Problem 3.3: Get Last Movies

let recentMovies = ["Old1", "Old2", "New1", "New2", "Latest1", "Latest2"];

// Get last 2 movies
let lastTwo = recentMovies.slice(4);
console.log("Last 2 movies:", lastTwo);
// Expected: ["Latest1", "Latest2"]

// Get last 3 movies
let lastThree = recentMovies.slice(3);
console.log("Last 3 movies:", lastThree);
// Expected: ["New2", "Latest1", "Latest2"]


Problem 3.4: Theater Section Display

let allTheaters = ["PVR Mall", "INOX Plaza", "Cinepolis Center", "Carnival City", "Big Cinema Park"];

// Show first 3 theaters
let topTheaters = allTheaters.slice(0, 3);
console.log("Top theaters:", topTheaters);
// Expected: ["PVR Mall", "INOX Plaza", "Cinepolis Center"]

// Show middle theaters
let middleTheaters = allTheaters.slice(1, 4);
console.log("Middle theaters:", middleTheaters);
// Expected: ["INOX Plaza", "Cinepolis Center", "Carnival City"]


Problem 3.5: Booking History Sections

let bookingHistory = ["Jan-Movie1", "Jan-Movie2", "Feb-Movie1", "Feb-Movie2", "Mar-Movie1", "Mar-Movie2"];

// Get January bookings
let janBookings = bookingHistory.slice(0, 2);
console.log("January bookings:", janBookings);
// Expected: ["Jan-Movie1", "Jan-Movie2"]

// Get February and March bookings
let recentBookings = bookingHistory.slice(2);
console.log("Recent bookings:", recentBookings);
// Expected: ["Feb-Movie1", "Feb-Movie2", "Mar-Movie1", "Mar-Movie2"]


📋 Problem Set 4: splice() - Modify Lists (5 problems)

Problem 4.1: Remove Specific Movie

let movieList = ["Pathaan", "Old Movie", "Avatar", "RRR"];

// Remove "Old Movie" at index 1
movieList.splice(1,1);
console.log("After removing old movie:", movieList);
// Expected: ["Pathaan", "Avatar", "RRR"]

// Remove "Avatar" at index 1
movieList.splice(1,1);
console.log("After removing Avatar:", movieList);
// Expected: ["Pathaan", "RRR"]


Problem 4.2: Add Movie in Middle

let featuredMovies = ["Pathaan", "Avatar"];

// Add "KGF 2" between Pathaan and Avatar
featuredMovies.splice(1, 0, "KGF 2");
console.log("After adding KGF 2:", featuredMovies);
// Expected: ["Pathaan", "KGF 2", "Avatar"]

// Add "RRR" at the beginning
featuredMovies.splice(0, 0, "RRR");
console.log("After adding RRR at start:", featuredMovies);
// Expected: ["RRR", "Pathaan", "KGF 2", "Avatar"]


Problem 4.3: Replace Theater

let theaters = ["PVR", "Old Theater", "INOX"];

// Replace "Old Theater" with "Cinepolis"
theaters.splice(1,1, "Cinepolis");
console.log("Updated theaters:", theaters);
// Expected: ["PVR", "Cinepolis", "INOX"]

// Replace first theater with "Premium PVR"
theaters.splice(0, 1, "Premium PVR");
console.log("With premium theater:", theaters);
// Expected: ["Premium PVR", "Cinepolis", "INOX"]


Problem 4.4: Update Showtimes

let showtimes = ["10 AM", "Old Time", "4 PM", "7 PM"];

// Replace "Old Time" with "1 PM" and "2:30 PM"
showtimes.splice(1, 1, "1 PM", "2:30 PM");
console.log("Updated showtimes:", showtimes);
// Expected: ["10 AM", "1 PM", "2:30 PM", "4 PM", "7 PM"]


Problem 4.5: Manage Watchlist

let watchlist = ["Movie A", "Movie B", "Watched Movie", "Movie C"];

// Remove "Watched Movie" and add "New Movie 1" and "New Movie 2"
watchlist.splice(2, 0, "New Movie 1", "New Movie 2");
console.log("Updated watchlist:", watchlist);
// Expected: ["Movie A", "Movie B", "New Movie 1", "New Movie 2", "Movie C"]


📋 Problem Set 5: filter() - Find Movies (5 problems)

Problem 5.1: Filter by Language

let movies = [
    {title: "Pathaan", language: "Hindi"},
    {title: "Avatar", language: "English"},
    {title: "RRR", language: "Telugu"},
    {title: "KGF 2", language: "Hindi"}
];

// Get only Hindi movies
let hindiMovies = movies.filter(function(movie) {
    return movie.language === Hindi;
});

console.log("Hindi movies:", hindiMovies);
// Expected: [{title: "Pathaan", language: "Hindi"}, {title: "KGF 2", language: "Hindi"}]

// Get only English movies
let englishMovies = movies.filter(function(movie) {
    return movie.language === "English";
});

console.log("English movies:", englishMovies);
// Expected: [{title: "Avatar", language: "English"}]


Problem 5.2: Filter by Rating

let movies = [
    {title: "Great Movie", rating: 9.2},
    {title: "Bad Movie", rating: 4.1},
    {title: "Good Movie", rating: 7.8},
    {title: "Average Movie", rating: 6.5}
];

// Get movies with rating above 7
let goodMovies = movies.filter(function(movie) {
    return movie.rating > 7;
});

console.log("Good movies (rating > 7):", goodMovies);
// Expected: [{title: "Great Movie", rating: 9.2}, {title: "Good Movie", rating: 7.8}]

// Get movies with rating below 5
let badMovies = movies.filter(function(movie) {
    return movie.rating < 5;
});

console.log("Bad movies (rating < 5):", badMovies);
// Expected: [{title: "Bad Movie", rating: 4.1}]


Problem 5.3: Filter Available Showtimes

let showtimes = [
    {time: "10:00 AM", available: true, price: 150},
    {time: "1:00 PM", available: false, price: 200},
    {time: "4:00 PM", available: true, price: 250},
    {time: "7:00 PM", available: true, price: 300}
];

// Get only available showtimes
let availableShows = showtimes.filter(function(show) {
    return show.available === true;
});

console.log("Available shows:", availableShows);
// Expected: 3 shows (10 AM, 4 PM, 7 PM)

// Get shows under ₹250
let affordableShows = showtimes.filter(function(show) {
    return show.price <= 250 && show.available === true;
});

console.log("Affordable available shows:", affordableShows);
// Expected: 2 shows (10 AM and 4 PM)


Problem 5.4: Filter by Genre

let movies = [
    {title: "Avengers", genre: "Action"},
    {title: "Titanic", genre: "Romance"},
    {title: "The Conjuring", genre: "Horror"},
    {title: "Fast & Furious", genre: "Action"}
];

// Get only Action movies
let actionMovies = movies.filter(function(movie) {
    return movie.genre === "Action";
});

console.log("Action movies:", actionMovies);
// Expected: [{title: "Avengers", genre: "Action"}, {title: "Fast & Furious", genre: "Action"}]

// Get non-Horror movies
let nonHorrorMovies = movies.filter(function(movie) {
    return movie.genre !== "Horror";
});

console.log("Non-horror movies:", nonHorrorMovies);
// Expected: 3 movies (all except The Conjuring)


Problem 5.5: Filter by Multiple Conditions

let movies = [
    {title: "Pathaan", language: "Hindi", rating: 8.5, available: true},
    {title: "Avatar", language: "English", rating: 9.0, available: false},
    {title: "RRR", language: "Telugu", rating: 8.8, available: true},
    {title: "Bad Hindi Movie", language: "Hindi", rating: 5.0, available: true}
];

// Get Hindi movies with rating above 8 that are available
let goodHindiMovies = movies.filter(function(movie) {
    return movie.language === "Hindi" && 
           movie.rating > 8 && 
           movie.available === true;
});

console.log("Good available Hindi movies:", goodHindiMovies);
// Expected: [{title: "Pathaan", language: "Hindi", rating: 8.5, available: true}]

// Get all movies with rating above 8.5
let highRatedMovies = movies.filter(function(movie) {
    return movie.rating > 8.5;
});

console.log("High rated movies:", highRatedMovies);
// Expected: [{title: "Avatar", language: "English", rating: 9.0, available: false}, {title: "RRR", language: "Telugu", rating: 8.8, available: true}]




🧪 Testing Your BookMyShow Features

📝 Testing Template

<!DOCTYPE html>
<html>
<head>
    <title>BookMyShow Array Methods</title>
</head>
<body>
    <h1>🎬 BookMyShow Features</h1>
    <p>Check the Console (F12) to see your movie features!</p>
    
    <script>
        console.log("🎬 Welcome to BookMyShow!");
        
        console.log("=== Problem 1.1: User Watchlist ===");
        
        // Paste your code here
        let userWatchlist = [];
        userWatchlist.push("Spider-Man");
        // Continue with your solution...
        
        console.log("=== Problem 1.2: Theater Now Showing ===");
        
        // Continue with next problem...
    </script>
</body>
</html>




🎯 Assignment Checklist

✅ Complete All 25 BookMyShow Problems

Problem Set 1: push() - Adding Movies (5 problems)
- Problem 1.1: Build User Watchlist
- Problem 1.2: Theater Now Showing
- Problem 1.3: Coming Soon List
- Problem 1.4: User Booking History
- Problem 1.5: Theater Showtimes

Problem Set 2: pop() - Removing Movies (5 problems)
- Problem 2.1: Remove from Watchlist
- Problem 2.2: Theater Removes Movie
- Problem 2.3: Cancel Last Booking
- Problem 2.4: Remove Last Showtime
- Problem 2.5: Coming Soon Updates

Problem Set 3: slice() - Get Sections (5 problems)
- Problem 3.1: Top Movies Display
- Problem 3.2: Weekend Showtimes
- Problem 3.3: Get Last Movies
- Problem 3.4: Theater Section Display
- Problem 3.5: Booking History Sections

Problem Set 4: splice() - Modify Lists (5 problems)
- Problem 4.1: Remove Specific Movie
- Problem 4.2: Add Movie in Middle
- Problem 4.3: Replace Theater
- Problem 4.4: Update Showtimes
- Problem 4.5: Manage Watchlist

Problem Set 5: filter() - Find Movies (5 problems)
- Problem 5.1: Filter by Language
- Problem 5.2: Filter by Rating
- Problem 5.3: Filter Available Showtimes
- Problem 5.4: Filter by Genre
- Problem 5.5: Filter by Multiple Conditions



🏆 Array Methods Mastery

You've built these BookMyShow features:
- ✅ Movie watchlist management
- ✅ Theater movie list updates
- ✅ Showtime management
- ✅ Movie filtering and search
- ✅ Booking history tracking

Ready for advanced topics when you can:
- Use array methods to build dynamic movie lists
- Filter movies by multiple criteria
- Manage complex data like showtimes and bookings
- Combine multiple array methods for complex operations



📝 Quick Reference

Array Methods Summary

| Method | Purpose | Modifies Original? | Example |

| `push()` | Add items to end | ✅ Yes | `movies.push("New Movie")` |
| `pop()` | Remove last item | ✅ Yes | `let removed = movies.pop()` |
| `slice()` | Get section copy | ❌ No | `let top3 = movies.slice(0,3)` |
| `splice()` | Add/remove anywhere | ✅ Yes | `movies.splice(1,1,"New")` |
| `filter()` | Find matching items | ❌ No | `let hindi = movies.filter(...)` |

 */