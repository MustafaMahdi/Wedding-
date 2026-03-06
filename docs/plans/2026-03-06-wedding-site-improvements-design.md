# Wedding Website Improvements - Design

## Overview

Improve the Mustafa & Sara wedding invitation website with venue details, guest wishes, visual enhancements, and spiritual touches.

## Changes

### 1. Remove RSVP
- Delete `RSVP.tsx`, remove from `page.tsx` and navigation

### 2. Guest Wishes (Firebase)
- New `GuestWishes.tsx` component
- Custom form: name, message (text), optional photo upload
- Firebase Firestore for text data, Firebase Storage for photo uploads
- Display submitted wishes as a live "wall of love"
- Replaces RSVP in the page flow

### 3. Venue Location
- Update `EventDetails.tsx` with real data:
  - Venue: مسجد فاضل
  - Address: حي المتميز، غرب سوميد، مدينة 6 أكتوبر، الجيزة
- Embedded Google Maps iframe
- Simplify to one event (ceremony at the mosque)

### 4. Venue Photos
- Update `Gallery.tsx` with venue photo placeholders

### 5. Cartoon Couple Photo
- Placeholder in Hero section (smaller, near names)
- Placeholder in new "About Us" mini-section between Hero and Countdown (larger)

### 6. Dress Code Note
- Styled card inside `EventDetails.tsx` below venue info
- Text: "In respect of the venue guidelines, we kindly ask our guests to observe a modest dress code. Revealing attire is not permitted within the mosque. Thank you for your understanding and consideration."

### 7. Quranic Verses as Dividers
- 3 verses as decorative section dividers:
  - الروم 30:21 between AboutUs and Countdown
  - يس 36:36 between Countdown and EventDetails
  - الفرقان 25:74 between Gallery and GuestWishes

### 8. Navigation Update
- Update nav links: Home, Events, Gallery, Wishes
- Uncomment EventDetails and Gallery in `page.tsx`

## Page Flow

```
Navigation
  -> Hero (cartoon placeholder small)
  -> AboutUs (cartoon placeholder large)
  -> QuranVerse (الروم 30:21)
  -> Countdown
  -> QuranVerse (يس 36:36)
  -> EventDetails (venue + map + dress code)
  -> Gallery (venue photos)
  -> QuranVerse (الفرقان 25:74)
  -> GuestWishes (Firebase)
  -> Footer
```

## Tech Stack
- Next.js 16 + React 19 + Tailwind CSS 4
- Firebase (Firestore + Storage) for guest wishes
