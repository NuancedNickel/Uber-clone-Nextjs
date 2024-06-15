# Introduction
This project is a clone of the popular ride-sharing app, Uber. It provides functionalities for users to book rides, view available drivers on a map, and process payments. The project is built with a modern stack that includes Next.js for server-side rendering and routing, React.js for the frontend, Tailwind CSS for styling, Google Maps API for displaying maps, Stripe for handling payments, and Clerk for authentication.

# Tech Stack
<p style="line-height: 2;">
  
* Next.js: Server-side rendering and routing    <br>
        
* React.js: Frontend library for building user interfaces   <br> 

* Tailwind CSS: Utility-first CSS framework    <br>

* Google Maps API: Integration for displaying maps and location data    <br>

* Stripe: Payment processing platform    <br>

* Clerk: User authentication and management  <br>

</p>


 # Installation and Setup
<p style="line-height: 2;">
--> Install Dependencies        <br>
        
To install the necessary dependencies, run the following command : 
<code>npm install</code>
</p>

<p style="line-height: 2;">
--> Run the Application        <br>
        
To build and run the application in development mode, use the following command : 
<code>npm run dev</code>
</p>

# Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm
* You have a Google Cloud account and have enabled the Places API and Maps JavaScript API
* You have customized your map and get a map id in /Map Styles
* You have a Stripe account for payment processing
* You have a Clerk account for authentication

# Environment Variables
To configure the application, create a <code>.env.local</code> file in the root directory and add the following environment variables to use the app :       

<p style="line-height: 2.5;">
  
* CLERK_SECRET_KEY = <code>your_clerk_secret_key</code>        <br>

* NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = <code>your_clerk_public_key</code>        <br>

* STRIPE_SECRET_KEY = <code>your_stripe_secret_key</code>       <br>

* NEXT_PUBLIC_STRIPE_PUBLISHER_KEY = <code>your_stripe_public_key</code>        <br>

 --> for calling the API server side  
* GOOGLE_API_KEY = <code>your_google_cloud_api_key</code>    <br>

 --> for calling the API client side    
* NEXT_PUBLIC_GOOGLE_API_KEY = <code>your_google_cloud_api_key</code>       <br>    

 --> your customized MAP ID from google cloud/map platform/map styles
* MAP_ID = <code>your MAP ID</code>        <br>

* NEXT_PUBLIC_CLERK_SIGN_IN_URL = <code>/sign-in</code>        <br>

* NEXT_PUBLIC_CLERK_SIGN_UP_URL = <code>/sign-up</code>        <br>

Replace the placeholder values with your actual Google cloud , clerk , Stripe & MAP ID configuration details.
</p>

