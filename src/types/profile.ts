import type { ExperienceCategory } from "@/types/experience";

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  location: string;
  bio: string;
  favoriteCategories: ExperienceCategory[];
}
