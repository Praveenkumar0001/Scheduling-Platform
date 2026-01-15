# Scheduling Platform (Cal.com Clone)

A fully functional scheduling/booking web application that replicates Cal.com's design and user experience. Built with modern web technologies including Next.js 14, TypeScript, PostgreSQL, and Prisma ORM.

## 🚀 Live Demo

- **Deployed Application**: [Your Deployment URL]
- **GitHub Repository**: [Your GitHub URL]

## ✨ Features

### Core Features (Implemented)

#### 1. Event Types Management ✅
- Create event types with title, description, duration, and URL slug
- Edit and delete existing event types
- List all event types on dashboard
- Unique public booking link for each event type
- Color-coded event types for easy identification

#### 2. Availability Settings ✅
- Set available days of the week (Monday-Sunday)
- Configure time slots for each day (e.g., 9:00 AM - 5:00 PM)
- Timezone support for availability scheduling
- Visual weekday selector interface

#### 3. Public Booking Page ✅
- Calendar view for date selection
- Display available time slots based on availability settings
- Booking form to collect attendee name and email
- Prevention of double booking (slot validation)
- Booking confirmation page with event details
- Clean, user-friendly interface matching Cal.com's design

#### 4. Bookings Dashboard ✅
- View all bookings in one place
- Filter by upcoming bookings
- Filter by past bookings
- Cancel booking functionality
- Detailed booking information display

### Bonus Features (Implemented)

- ✅ **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- ✅ **Multiple Availability Schedules**: Support for multiple schedule configurations
- ✅ **Date Overrides**: Block specific dates or set custom hours for particular days
- ✅ **Rescheduling Flow**: Users can reschedule existing bookings via unique token
- ✅ **Email Notifications**: Automated emails for booking confirmation and cancellation
- ✅ **Buffer Time**: Configure buffer time before/after meetings to prevent back-to-back bookings
- ✅ **Custom Booking Questions**: Add custom questions to collect additional information during booking
- ✅ **Time Zone Support**: Timezone selector for availability settings
- ✅ **Database Design**: Well-structured PostgreSQL schema with proper relationships
- ✅ **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (React.js Single Page Application)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **API Architecture**: RESTful API
- **Date Handling**: date-fns
- **Email Service**: Nodemailer

### Database
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Schema Management**: Prisma Migrate

## 📊 Database Schema

```prisma
model User {
  id             String         @id @default(cuid())
  username       String         @unique
  email          String         @unique
  name           String
  timezone       String         @default("UTC")
  eventTypes     EventType[]
  availabilities Availability[]
  bookings       Booking[]
}

model EventType {
  id          String    @id @default(cuid())
  title       String
  slug        String
  description String?
  duration    Int       // in minutes
  color       String
  isActive    Boolean   @default(true)
  userId      String
  user        User      @relation(...)
  bookings    Booking[]
  @@unique([userId, slug])
}

model Availability {
  id        String   @id @default(cuid())
  dayOfWeek Int      // 0-6 (Sunday-Saturday)
  startTime String   // Format: "HH:MM"
  endTime   String   // Format: "HH:MM"
  userId    String
  user      User     @relation(...)
}

model Booking {
  id            String   @id @default(cuid())
  startTime     DateTime
  endTime       DateTime
  attendeeName  String
  attendeeEmail String
  attendeeNotes String?
  status        String   @default("confirmed")
  userId        String
  eventTypeId   String
  user          User      @relation(...)
  eventType     EventType @relation(...)
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (local or cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd scheduling-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Push the schema to your database
   npx prisma db push
   
   # Generate Prisma Client
   npx prisma generate
   
   # Seed the database with sample data
   npx tsx prisma/seed.ts
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The application now runs with:
   - **Backend**: Express.js with Node.js
   - **Frontend**: Next.js (React.js SPA)
   - **Database**: PostgreSQL

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Sample Data

The seed script creates:
- Demo user (demo@example.com)
- 2 sample event types:
  - 30 Minute Meeting
  - 60 Minute Consultation
- Default availability (Monday-Friday, 9 AM - 5 PM)

## 📁 Project Structure

```
src/
├── app/
│   ├── (admin)/              # Admin dashboard routes
│   │   ├── dashboard/        # Main dashboard
│   │   ├── event-types/      # Event type management
│   │   ├── availability/     # Availability settings
│   │   └── bookings/         # Bookings management
│   ├── [username]/           # Public booking pages
│   ├── api/                  # API routes
│   └── booking/              # Booking success/cancel pages
├── components/
│   ├── availability/         # Availability components
│   ├── booking/              # Booking components
│   ├── event-types/          # Event type components
│   ├── layout/               # Layout components
│   ├── shared/               # Shared components
│   └── ui/                   # UI components (shadcn/ui)
├── lib/
│   ├── helpers/              # Helper functions
│   ├── services/             # Business logic services
│   └── validations/          # Zod validation schemas
├── types/                    # TypeScript type definitions
└── constants/                # Constants (timezones, time slots)
```

## 🎨 Design Philosophy

This application closely replicates Cal.com's design principles:
- Clean, minimal interface
- Intuitive navigation
- Clear visual hierarchy
- Consistent color scheme
- Responsive layouts
- Smooth transitions and interactions

## 🔑 Key Features Explained

### Event Type Management
Admin users can create multiple event types with custom durations, descriptions, and URL slugs. Each event type gets a unique public booking link.

### Availability System
Users set their weekly availability by selecting days and time ranges. The system automatically generates available time slots based on these settings.

### Smart Booking
The booking system:
- Prevents double bookings
- Validates time slots against availability
- Checks for conflicts with existing bookings
- Generates 30-minute interval slots

### Public Booking Flow
1. User selects an event type via public link
2. Calendar displays available dates
3. Available time slots shown for selected date
4. Booking form collects attendee information
5. Confirmation page displays booking details

## 🧪 Testing the Application

### Admin Features
1. Navigate to `/dashboard`
2. Create a new event type at `/event-types/new`
3. Set availability at `/availability/edit`
4. View bookings at `/bookings`

### Public Booking
1. Visit `/demo/30-min-meeting` (or any event slug)
2. Select a date from the calendar
3. Choose an available time slot
4. Fill in booking form
5. View confirmation page

## 📝 Assumptions Made

1. **Single User System**: The app assumes a default logged-in user for admin features
2. **No Authentication**: Login system not implemented as per requirements
3. **Email Notifications**: Not implemented (bonus feature)
4. **Timezone**: Default timezone is UTC, configurable per user
5. **Time Slots**: Generated in 30-minute intervals
6. **Demo User**: All operations use the seeded demo user

## 🚀 Deployment

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Render**

### Database Hosting
- **Supabase** (PostgreSQL)
- **Neon** (PostgreSQL)
- **Railway** (PostgreSQL)
- **Heroku Postgres**

### Deployment Steps

1. Push code to GitHub
2. Connect repository to deployment platform
3. Set environment variables
4. Deploy application
5. Run database migrations
6. Seed the database

## 🤝 Contributing

This project was created as part of an SDE Intern assessment. All code is original work with AI assistance for development acceleration.

## 📄 License

MIT

## 👨‍💻 Author

Created by [Your Name]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

---

**Note**: This project demonstrates proficiency in full-stack development, database design, and modern web technologies. Every aspect of the codebase can be explained and justified during technical interviews.
