# Calgary Hotel Deal Finder

This is a web application designed to help users find the best hotel deals in Calgary. It features a modern, responsive interface with advanced search and filtering capabilities.

## Features

*   **Search and Filter:** Search for hotels by name and filter by price, star rating, and amenities.
*   **Interactive Map:** View hotel locations on an embedded Google Map.
*   **Detailed Hotel Pages:** Get in-depth information about each hotel, including a photo gallery.
*   **Top Deals:** See a curated list of the best deals available.
*   **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18.x or later)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/calgary-hotel-deal-finder.git
    cd calgary-hotel-deal-finder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Google Maps API key:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
    ```
    You can get a free API key from the [Google Cloud Console](https://console.cloud.google.com/).

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

To deploy, simply connect your GitHub repository to Vercel and follow the on-screen instructions. Vercel will automatically detect that this is a Next.js project and configure the build settings for you.

You will need to add your `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` as an environment variable in your Vercel project settings.
