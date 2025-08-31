# Pumpuiz & Pete's Wedding Website

A beautiful, responsive single-page wedding website built with Next.js 14 (App Router) and Tailwind CSS. Features a rustic earthy design with elegant dark green accents.

## ✨ Features

- **Hero Section**: Fullscreen background with couple names, date, location, and countdown timer
- **Our Story**: Photo collage in polaroid style with overlapping layout
- **Event Details**: Timeline layout with icons and Google Maps integration
- **Travel & Accommodation**: Hotel cards and transportation information
- **Gallery**: Image grid with lightbox modal and lazy loading
- **RSVP**: Google Form integration with additional information
- **Footer**: Wedding hashtag, contact info, and social media links

## 🎨 Design Features

- **Color Palette**: Rustic earthy tones (browns, beiges) with elegant dark green accents
- **Typography**: Mix of script fonts (Dancing Script) for headings and serif/sans-serif for body text
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Polaroid Style**: Photo borders and overlapping layouts for a vintage feel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wedding-singlepage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Customization

### Personal Information

Update the following files with your details:

- **Hero Section** (`src/components/Hero.tsx`):
  - Couple names
  - Wedding date
  - Venue location
  - Background image URL

- **Our Story** (`src/components/OurStory.tsx`):
  - Story text
  - Photo URLs and captions
  - Photo rotation angles

- **Event Details** (`src/components/EventDetails.tsx`):
  - Timeline events and times
  - Venue information
  - Google Maps embed URL

- **Travel & Accommodation** (`src/components/TravelAccommodation.tsx`):
  - Hotel information
  - Transportation options
  - Contact details

- **RSVP** (`src/components/RSVP.tsx`):
  - Google Form URL
  - RSVP deadline
  - Contact information

### Colors and Styling

The color scheme is defined in `tailwind.config.ts`:

- **Rustic**: Warm brown tones (#c9a05a, #b88a45, etc.)
- **Sage**: Elegant green tones (#5f715f, #4a5a4a, etc.)
- **Warm**: Soft beige tones (#d8cbb8, #c4b39c, etc.)

### Fonts

The website uses Google Fonts:
- **Dancing Script**: Script font for headings
- **Playfair Display**: Serif font for secondary headings
- **Inter**: Sans-serif font for body text

### Images

Replace placeholder images with your own:
1. Update image URLs in component files
2. Use high-quality images (recommended: 1200x800px minimum)
3. Optimize images for web (compress to reduce file size)

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full multi-column layouts with hover effects

## 🔧 Technical Details

### Built With

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### File Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── OurStory.tsx
│   ├── EventDetails.tsx
│   ├── TravelAccommodation.tsx
│   ├── Gallery.tsx
│   ├── RSVP.tsx
│   └── Footer.tsx
└── ...
```

### Key Components

- **Navigation**: Sticky header with smooth scrolling
- **Hero**: Fullscreen landing section with countdown
- **OurStory**: Text and photo collage
- **EventDetails**: Timeline and venue information
- **TravelAccommodation**: Hotel and transport cards
- **Gallery**: Image grid with modal
- **RSVP**: Form integration and details
- **Footer**: Contact and social information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Customization Checklist

- [ ] Update couple names and wedding date
- [ ] Replace background images with your photos
- [ ] Update venue information and Google Maps URL
- [ ] Customize hotel and transportation details
- [ ] Replace Google Form URL with your actual form
- [ ] Update contact information and social media links
- [ ] Customize color scheme if desired
- [ ] Add your own photos to the gallery
- [ ] Update the story text with your love story
- [ ] Test on mobile and desktop devices

## 🎯 Future Enhancements

- **Photo Gallery**: Add more photos and categories
- **Guest Book**: Digital guest book functionality
- **Registry**: Wedding registry integration
- **Live Updates**: Real-time countdown and updates
- **Multi-language**: Support for multiple languages
- **Dark Mode**: Toggle between light and dark themes

## 📞 Support

For questions or customization help:
- Email: hello@wedding.com
- Phone: (555) 123-4567

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for Pumpuiz & Pete's special day
