/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type DBLogoAttrs = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & { size?: string | number; hero?: boolean },
  HTMLElement
>;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'db-logo': DBLogoAttrs;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'db-logo': DBLogoAttrs;
    }
  }
}

export {};
