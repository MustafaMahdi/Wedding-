# Wedding Site Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enhance the wedding website with real venue details, guest wishes via Firebase, Quranic verse dividers, cartoon placeholders, and dress code note.

**Architecture:** Static Next.js site with one dynamic feature (guest wishes via Firebase Firestore + Storage). All other changes are component updates/additions. Quranic verses are reusable divider components placed between sections.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Firebase (Firestore + Storage)

---

### Task 1: Install and Configure Firebase

**Files:**
- Modify: `package.json`
- Create: `src/lib/firebase.ts`
- Create: `.env.local` (gitignored)

**Step 1: Install Firebase SDK**

Run: `npm install firebase`

**Step 2: Create Firebase config**

Create `src/lib/firebase.ts`:

```ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app);
```

**Step 3: Create `.env.local` with placeholder values**

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Step 4: Commit**

```bash
git add src/lib/firebase.ts package.json package-lock.json
git commit -m "feat: add Firebase configuration for guest wishes"
```

Note: Do NOT commit `.env.local`.

---

### Task 2: Create QuranVerse Divider Component

**Files:**
- Create: `src/components/QuranVerse.tsx`

**Step 1: Create the component**

A reusable component that takes a verse and surah reference as props. Styled as a decorative divider with Arabic text centered, ornamental lines on sides. Uses the existing rose/amber gradient theme.

Props: `verse: string`, `reference: string`

The three verses to use:
1. الروم 30:21 — `وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً`
2. يس 36:36 — `سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ`
3. الفرقان 25:74 — `رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا`

Style: `dir="rtl"`, larger Arabic font, rose-400 ornamental borders, soft background gradient.

**Step 2: Commit**

```bash
git add src/components/QuranVerse.tsx
git commit -m "feat: add QuranVerse decorative divider component"
```

---

### Task 3: Create AboutUs Component with Cartoon Placeholder

**Files:**
- Create: `src/components/AboutUs.tsx`

**Step 1: Create the component**

A section with a large circular placeholder for the cartoon couple image. Centered layout, with a placeholder div showing a gradient + "Your Cartoon Here" text. Styled similarly to other sections (intersection observer for fade-in animation).

The placeholder should be a large circle (~64x64 / 256px) with a rose-to-amber gradient and camera/image icon.

**Step 2: Commit**

```bash
git add src/components/AboutUs.tsx
git commit -m "feat: add AboutUs section with cartoon couple placeholder"
```

---

### Task 4: Update Hero with Small Cartoon Placeholder

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Add a small circular placeholder**

Add a circular placeholder (w-32 h-32) above the names section, with the same gradient placeholder style. This will be replaced with the actual cartoon image later.

**Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add cartoon couple placeholder to Hero section"
```

---

### Task 5: Update EventDetails with Real Venue, Map, and Dress Code

**Files:**
- Modify: `src/components/EventDetails.tsx`

**Step 1: Replace placeholder events**

Replace the 3 placeholder events with a single event:
- Title: حفل الزفاف (Wedding Ceremony)
- Venue: مسجد فاضل
- Address: حي المتميز، غرب سوميد، مدينة 6 أكتوبر، الجيزة
- Date: April 9, 2026

**Step 2: Add embedded Google Maps iframe**

Add a Google Maps embed using the venue address. Use an iframe with the Maps Embed API:
```
https://www.google.com/maps/embed/v1/place?q=مسجد+فاضل+غرب+سوميد+6+أكتوبر&key=...
```
Or use a simple iframe with `maps.google.com` search query (no API key needed):
```
https://maps.google.com/maps?q=مسجد+فاضل+حي+المتميز+غرب+سوميد+6+أكتوبر&output=embed
```

**Step 3: Add dress code note card**

Below the venue info, add a styled card with the dress code message:
"In respect of the venue guidelines, we kindly ask our guests to observe a modest dress code. Revealing attire is not permitted within the mosque. Thank you for your understanding and consideration."

Use a soft amber/rose background card with an appropriate icon.

**Step 4: Commit**

```bash
git add src/components/EventDetails.tsx
git commit -m "feat: update EventDetails with real venue, map, and dress code"
```

---

### Task 6: Update Gallery for Venue Photos

**Files:**
- Modify: `src/components/Gallery.tsx`

**Step 1: Update gallery items**

Replace the generic "Photo 1-6" placeholders with venue-themed placeholders:
- "Mosque Exterior", "Prayer Hall", "Entrance", "Garden Area", "Interior Details", "Night View"

Keep the gradient placeholders but update labels so it's clear these are spots for venue photos.

Remove the "Add your beautiful photos" note at the bottom.

**Step 2: Commit**

```bash
git add src/components/Gallery.tsx
git commit -m "feat: update Gallery with venue photo placeholders"
```

---

### Task 7: Create GuestWishes Component

**Files:**
- Create: `src/components/GuestWishes.tsx`

**Step 1: Create the component**

A "Wall of Love" section with:

**Form portion:**
- Name input (required)
- Message textarea (required)
- Photo upload input (optional) — accepts image files, shows preview
- Submit button

**On submit:**
- Upload photo to Firebase Storage (if provided) and get download URL
- Save to Firestore collection `wishes`: `{ name, message, photoURL?, createdAt }`

**Display portion:**
- Fetch all wishes from Firestore ordered by `createdAt` desc
- Display as a masonry/grid of cards showing name, message, and photo (if any)
- Use `onSnapshot` for real-time updates

**Style:** Match existing site theme (rose/amber gradients, rounded cards, fade-in animations).

**Step 2: Commit**

```bash
git add src/components/GuestWishes.tsx
git commit -m "feat: add GuestWishes component with Firebase integration"
```

---

### Task 8: Update Navigation and Page Layout

**Files:**
- Modify: `src/components/Navigation.tsx`
- Modify: `src/app/page.tsx`
- Delete: `src/components/RSVP.tsx`

**Step 1: Update Navigation links**

Replace current navLinks with:
```ts
const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#event-section" },
    { name: "Gallery", href: "#gallery-section" },
    { name: "Wishes", href: "#wishes-section" },
];
```

**Step 2: Update page.tsx**

New page flow:
```tsx
<Navigation />
<Hero />
<AboutUs />
<QuranVerse verse="..." reference="سورة الروم ٣٠:٢١" />
<Countdown />
<QuranVerse verse="..." reference="سورة يس ٣٦:٣٦" />
<EventDetails />
<Gallery />
<QuranVerse verse="..." reference="سورة الفرقان ٢٥:٧٤" />
<GuestWishes />
<Footer />
```

Remove RSVP import. Add imports for new components (AboutUs, QuranVerse, GuestWishes).

**Step 3: Delete RSVP.tsx**

```bash
rm src/components/RSVP.tsx
```

**Step 4: Commit**

```bash
git add src/components/Navigation.tsx src/app/page.tsx
git rm src/components/RSVP.tsx
git commit -m "feat: update page layout with new section flow, remove RSVP"
```

---

### Task 9: Final Verification

**Step 1: Run the dev server and verify**

Run: `npm run dev`

Check:
- All sections render in correct order
- Quranic verses display correctly with RTL text
- Navigation links scroll to correct sections
- Google Maps embed loads
- Dress code card displays
- Guest wishes form submits (requires Firebase credentials)
- No console errors

**Step 2: Run build to check for errors**

Run: `npm run build`

Expected: Build succeeds with no type errors.

**Step 3: Final commit if any fixes needed**
