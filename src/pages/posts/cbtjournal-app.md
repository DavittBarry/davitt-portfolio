---
layout: '@/templates/BasePost.astro'
title: 'Building CBTJournal: a personal tool for mental wellness'
description: 'How I created a privacy-focused cognitive behavioral therapy app to help people track thoughts and improve mental health'
pubDate: 2026-01-19T00:00:00Z
imgSrc: '/assets/images/image-post7.jpeg'
imgAlt: 'CBTJournal development journey'
---

# Building CBTJournal: a personal tool for mental wellness

Over the past few months, I've been working on something deeply meaningful to me. CBTJournal is a privacy-focused cognitive behavioral therapy app that helps people track their thoughts, identify cognitive distortions, and work toward better mental health using proven CBT techniques.

## Why I built this

Mental health tools shouldn't require you to share your most private thoughts with a server somewhere. After reading "Feeling Good" by David D. Burns, M.D., I wanted to create a tool that would help people practice CBT techniques while keeping their data completely private and local.

The app is based on evidence-based cognitive behavioral therapy methods, particularly the techniques outlined in Burns' bestselling book. CBT has helped millions of people challenge negative thought patterns and develop healthier ways of thinking.

## What CBTJournal does

The app provides several core features:

**Track your thoughts**: Record situations that trigger negative emotions, identify your automatic thoughts, recognize cognitive distortions like all-or-nothing thinking or catastrophizing, and develop balanced, rational responses.

**Practice gratitude**: Build positive thought patterns by noting three things you're grateful for each day. Regular gratitude practice has been shown to improve overall mood and perspective.

**Monitor your mood**: Use the Burns Depression Checklist to track mental health over time. See patterns emerge and measure progress as you develop healthier thinking habits.

**Analyze your patterns**: View charts and statistics showing emotion trends, common cognitive distortions, and depression scores over time.

## Technical approach

I built CBTJournal using modern web technologies:

- **React and TypeScript** for a type-safe, component-based architecture.
- **Tailwind CSS** for a clean, calming design that doesn't overwhelm users.
- **Capacitor** to deploy as both a web app and native mobile apps for iOS and Android.
- **IndexedDB** for local storage, ensuring all data stays on the user's device.
- **Recharts** for visualizing patterns and progress over time.

One of the core architectural decisions was making this a fully client-side application. No servers, no accounts, no data collection. Everything runs in your browser or on your device.

## Privacy first

All data stays on your device. Nothing is sent to servers. You have complete control and privacy. Users can export backups regularly to keep their work safe.

This was non-negotiable for me. Mental health journaling is intensely personal, and people should never have to worry about their private thoughts being stored somewhere they can't control.

## What I learned

Building CBTJournal taught me a lot about designing for sensitive use cases:

- **Thoughtful UX matters more than ever**: When you're building tools for mental health, every interaction needs to feel supportive, not overwhelming.
- **Accessibility is essential**: Mental health tools should work for everyone, regardless of technical ability or device.
- **Local-first architecture has real benefits**: Users appreciate knowing their data never leaves their device.
- **Mobile deployment has its challenges**: Getting a web app to work smoothly as a native mobile app requires careful attention to platform differences.

## Try it yourself

CBTJournal is live at [cbtjournal.app](https://cbtjournal.app/). The app will be available on Google Play Store and Apple App Store soon.

The code is open source on [GitHub](https://github.com/DavittBarry/CBTJournal/tree/main) if you want to see how it's built or contribute.

## Final thoughts

This project has been a reminder that sometimes the best solutions come from building tools we wish existed. CBTJournal isn't meant to replace professional mental health treatment, but it can be a helpful companion for anyone learning and practicing CBT techniques.

If you're interested in mental health, CBT, or building privacy-focused apps, I'd love to hear your thoughts. Feel free to [reach out](mailto:davittbarry333@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/davittbarry/).

Building tools that might help people improve their mental health has been incredibly rewarding, and I'm excited to see where this project goes next.
