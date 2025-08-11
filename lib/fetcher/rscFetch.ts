import { notFound } from 'next/navigation';
import type {
  HomePageData,
  TreatmentsPageData,
  CircuitsPageData,
  MembershipsPageData,
  ContactPageData,
  TermsPageData,
} from '../types/data';

// Cache tags for revalidation - ready for phase-2 API
export const CACHE_TAGS = {
  HOME: 'home',
  TREATMENTS: 'tratamientos',
  CIRCUITS: 'circuitos',
  MEMBERSHIPS: 'membresias',
  CONTACT: 'contacto',
  TERMS: 'terminos',
} as const;

// Environment configuration
const IS_DEV = process.env.NODE_ENV === 'development';
const API_BASE_URL = process.env.API_BASE_URL || '';

/**
 * RSC Fetch Facade
 *
 * Today: Imports JSON files directly for static data
 * Phase 2: Will use fetch('/api/...') to get data from API
 *
 * This abstraction allows us to swap data sources without refactoring components
 */

async function fetchStaticData<T>(filename: string): Promise<T> {
  try {
    // Phase 1: Import JSON files directly
    const data = await import(`../../data/${filename}.json`);
    return data.default as T;
  } catch (error) {
    if (IS_DEV) {
      console.error(`Failed to load static data: ${filename}`, error);
    }
    throw error;
  }
}

async function fetchFromAPI<T>(endpoint: string, tags: string[]): Promise<T> {
  try {
    // Phase 2: Fetch from API (currently not implemented)
    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
      next: {
        tags,
        revalidate: 3600, // 1 hour cache
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (IS_DEV) {
      console.error(`Failed to fetch from API: ${endpoint}`, error);
    }
    throw error;
  }
}

/**
 * Fetch home page data
 */
export async function getHomeData(): Promise<HomePageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<HomePageData>('home');
    }

    // Phase 2: API
    return await fetchFromAPI<HomePageData>('home', [CACHE_TAGS.HOME]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch home data:', error);
    }
    notFound();
  }
}

/**
 * Fetch treatments page data
 */
export async function getTreatmentsData(): Promise<TreatmentsPageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<TreatmentsPageData>('tratamientos');
    }

    // Phase 2: API
    return await fetchFromAPI<TreatmentsPageData>('treatments', [
      CACHE_TAGS.TREATMENTS,
    ]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch treatments data:', error);
    }
    notFound();
  }
}

/**
 * Fetch circuits page data
 */
export async function getCircuitsData(): Promise<CircuitsPageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<CircuitsPageData>('circuitos');
    }

    // Phase 2: API
    return await fetchFromAPI<CircuitsPageData>('circuits', [
      CACHE_TAGS.CIRCUITS,
    ]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch circuits data:', error);
    }
    notFound();
  }
}

/**
 * Fetch memberships page data
 */
export async function getMembershipsData(): Promise<MembershipsPageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<MembershipsPageData>('membresias');
    }

    // Phase 2: API
    return await fetchFromAPI<MembershipsPageData>('memberships', [
      CACHE_TAGS.MEMBERSHIPS,
    ]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch memberships data:', error);
    }
    notFound();
  }
}

/**
 * Fetch contact page data
 */
export async function getContactData(): Promise<ContactPageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<ContactPageData>('contacto');
    }

    // Phase 2: API
    return await fetchFromAPI<ContactPageData>('contact', [CACHE_TAGS.CONTACT]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch contact data:', error);
    }
    notFound();
  }
}

/**
 * Fetch terms page data
 */
export async function getTermsData(): Promise<TermsPageData> {
  try {
    // Phase 1: Static JSON
    if (!API_BASE_URL) {
      return await fetchStaticData<TermsPageData>('terminos');
    }

    // Phase 2: API
    return await fetchFromAPI<TermsPageData>('terms', [CACHE_TAGS.TERMS]);
  } catch (error) {
    if (IS_DEV) {
      console.error('Failed to fetch terms data:', error);
    }
    notFound();
  }
}

/**
 * Revalidate specific content by tags
 * Phase 2: This will trigger revalidation when content changes
 */
export async function revalidateContent(tags: string[]): Promise<void> {
  if (IS_DEV) {
    console.log('Revalidating content for tags:', tags);
  }

  // Phase 2: Implement actual revalidation logic
  // This is where we'll use Next.js revalidateTag() when we have an API
}
