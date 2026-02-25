import { mockProjects, mockCampaigns, mockRoles } from './mock-data';
import { Project, Campaign, VolunteerRole } from '@/types';

/**
 * Simulates a delay to mimic network request.
 * In a real application, this is where you'd use fetch() to Sanity/Strapi.
 */
async function simulateNetworkDelay(ms: number = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getProjects(): Promise<Project[]> {
  await simulateNetworkDelay();
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  await simulateNetworkDelay();
  return mockProjects.find(p => p.slug === slug) || null;
}

export async function getCampaigns(): Promise<Campaign[]> {
  await simulateNetworkDelay();
  return mockCampaigns;
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  await simulateNetworkDelay();
  return mockCampaigns.find(c => c.slug === slug) || null;
}

export async function getVolunteerRoles(): Promise<VolunteerRole[]> {
  await simulateNetworkDelay();
  return mockRoles;
}
