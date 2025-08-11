/**
 * Cache Tags & Revalidation Contract for W Spa
 *
 * This module defines the caching and revalidation strategy for Phase 2 API integration.
 * Today: Static data with predictable cache tags
 * Phase 2: Dynamic revalidation based on content changes
 */

import { revalidateTag } from 'next/cache';

// Cache tag constants - used across the application
export const CACHE_TAGS = {
  // Page-level tags
  HOME: 'home',
  TREATMENTS: 'tratamientos',
  CIRCUITS: 'circuitos',
  MEMBERSHIPS: 'membresias',
  CONTACT: 'contacto',
  TERMS: 'terminos',

  // Content-type level tags (for granular revalidation)
  HERO_SLIDES: 'hero-slides',
  TREATMENT_LIST: 'treatment-list',
  CIRCUIT_LIST: 'circuit-list',
  MEMBERSHIP_LIST: 'membership-list',
  CONTACT_INFO: 'contact-info',
  POLICIES: 'policies',

  // Global content tags
  NAVIGATION: 'navigation',
  FOOTER: 'footer',
  GLOBAL_CONFIG: 'global-config',
} as const;

// Type for cache tags
export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];

/**
 * Cache configuration for different content types
 */
export const CACHE_CONFIG = {
  // Page data - revalidate every hour in production
  PAGE_DATA: {
    revalidate: 3600, // 1 hour
    tags: [
      CACHE_TAGS.HOME,
      CACHE_TAGS.TREATMENTS,
      CACHE_TAGS.CIRCUITS,
      CACHE_TAGS.MEMBERSHIPS,
      CACHE_TAGS.CONTACT,
      CACHE_TAGS.TERMS,
    ],
  },

  // Dynamic content - revalidate every 10 minutes
  DYNAMIC_CONTENT: {
    revalidate: 600, // 10 minutes
    tags: [
      CACHE_TAGS.TREATMENT_LIST,
      CACHE_TAGS.CIRCUIT_LIST,
      CACHE_TAGS.MEMBERSHIP_LIST,
    ],
  },

  // Static content - revalidate daily
  STATIC_CONTENT: {
    revalidate: 86400, // 24 hours
    tags: [
      CACHE_TAGS.CONTACT_INFO,
      CACHE_TAGS.POLICIES,
      CACHE_TAGS.NAVIGATION,
      CACHE_TAGS.FOOTER,
    ],
  },

  // Configuration - revalidate on demand only
  CONFIG: {
    revalidate: false, // On-demand revalidation only
    tags: [CACHE_TAGS.GLOBAL_CONFIG],
  },
} as const;

/**
 * Revalidation functions for different content types
 * Phase 2: These will be called by webhook endpoints when content changes
 */

/**
 * Revalidate home page content
 */
export async function revalidateHome(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.HOME);
    revalidateTag(CACHE_TAGS.HERO_SLIDES);
    console.log('✅ Revalidated home page content');
  } catch (error) {
    console.error('❌ Failed to revalidate home page:', error);
    throw error;
  }
}

/**
 * Revalidate treatments content
 */
export async function revalidateTreatments(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.TREATMENTS);
    revalidateTag(CACHE_TAGS.TREATMENT_LIST);
    console.log('✅ Revalidated treatments content');
  } catch (error) {
    console.error('❌ Failed to revalidate treatments:', error);
    throw error;
  }
}

/**
 * Revalidate circuits content
 */
export async function revalidateCircuits(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.CIRCUITS);
    revalidateTag(CACHE_TAGS.CIRCUIT_LIST);
    console.log('✅ Revalidated circuits content');
  } catch (error) {
    console.error('❌ Failed to revalidate circuits:', error);
    throw error;
  }
}

/**
 * Revalidate memberships content
 */
export async function revalidateMemberships(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.MEMBERSHIPS);
    revalidateTag(CACHE_TAGS.MEMBERSHIP_LIST);
    console.log('✅ Revalidated memberships content');
  } catch (error) {
    console.error('❌ Failed to revalidate memberships:', error);
    throw error;
  }
}

/**
 * Revalidate contact information
 */
export async function revalidateContact(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.CONTACT);
    revalidateTag(CACHE_TAGS.CONTACT_INFO);
    console.log('✅ Revalidated contact content');
  } catch (error) {
    console.error('❌ Failed to revalidate contact:', error);
    throw error;
  }
}

/**
 * Revalidate terms and policies
 */
export async function revalidateTerms(): Promise<void> {
  try {
    revalidateTag(CACHE_TAGS.TERMS);
    revalidateTag(CACHE_TAGS.POLICIES);
    console.log('✅ Revalidated terms content');
  } catch (error) {
    console.error('❌ Failed to revalidate terms:', error);
    throw error;
  }
}

/**
 * Revalidate all content (use sparingly)
 */
export async function revalidateAll(): Promise<void> {
  try {
    // Revalidate all page-level tags
    Object.values(CACHE_TAGS).forEach((tag) => {
      revalidateTag(tag);
    });
    console.log('✅ Revalidated all content');
  } catch (error) {
    console.error('❌ Failed to revalidate all content:', error);
    throw error;
  }
}

/**
 * Get cache tags for a specific page
 */
export function getPageCacheTags(page: string): string[] {
  const baseTags = [CACHE_TAGS.NAVIGATION, CACHE_TAGS.FOOTER];

  switch (page) {
    case 'home':
      return [...baseTags, CACHE_TAGS.HOME, CACHE_TAGS.HERO_SLIDES];
    case 'tratamientos':
      return [...baseTags, CACHE_TAGS.TREATMENTS, CACHE_TAGS.TREATMENT_LIST];
    case 'circuitos':
      return [...baseTags, CACHE_TAGS.CIRCUITS, CACHE_TAGS.CIRCUIT_LIST];
    case 'membresias':
      return [...baseTags, CACHE_TAGS.MEMBERSHIPS, CACHE_TAGS.MEMBERSHIP_LIST];
    case 'contacto':
      return [...baseTags, CACHE_TAGS.CONTACT, CACHE_TAGS.CONTACT_INFO];
    case 'terminos':
      return [...baseTags, CACHE_TAGS.TERMS, CACHE_TAGS.POLICIES];
    default:
      return baseTags;
  }
}

/**
 * Phase 2: Webhook handlers for content management system
 * These will be implemented as API routes when we have a CMS
 */

export const WEBHOOK_EVENTS = {
  CONTENT_UPDATED: 'content.updated',
  TREATMENT_CREATED: 'treatment.created',
  TREATMENT_UPDATED: 'treatment.updated',
  TREATMENT_DELETED: 'treatment.deleted',
  CIRCUIT_UPDATED: 'circuit.updated',
  MEMBERSHIP_UPDATED: 'membership.updated',
  CONTACT_UPDATED: 'contact.updated',
  POLICY_UPDATED: 'policy.updated',
} as const;

export type WebhookEvent = (typeof WEBHOOK_EVENTS)[keyof typeof WEBHOOK_EVENTS];

/**
 * Map webhook events to revalidation functions
 * Phase 2: This will be used by API route handlers
 */
export const REVALIDATION_MAP: Record<WebhookEvent, () => Promise<void>> = {
  [WEBHOOK_EVENTS.CONTENT_UPDATED]: revalidateAll,
  [WEBHOOK_EVENTS.TREATMENT_CREATED]: revalidateTreatments,
  [WEBHOOK_EVENTS.TREATMENT_UPDATED]: revalidateTreatments,
  [WEBHOOK_EVENTS.TREATMENT_DELETED]: revalidateTreatments,
  [WEBHOOK_EVENTS.CIRCUIT_UPDATED]: revalidateCircuits,
  [WEBHOOK_EVENTS.MEMBERSHIP_UPDATED]: revalidateMemberships,
  [WEBHOOK_EVENTS.CONTACT_UPDATED]: revalidateContact,
  [WEBHOOK_EVENTS.POLICY_UPDATED]: revalidateTerms,
};
