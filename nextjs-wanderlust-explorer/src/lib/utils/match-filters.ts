import type { Experience } from "@/types/experience";
import type { ExperienceFilters } from "@/types/filters";

export function matchesExperienceFilters(
	experience: Experience,
	filters: ExperienceFilters
) {
	const searchTerm = filters.search.trim();
	let searchMatches = true;

	if (searchTerm) {
		try {
			searchMatches = new RegExp(searchTerm, "i").test(experience.title);
		} catch {
			searchMatches = false;
		}
	}

	const categoryMatches = filters.category
		? experience.category === filters.category
		: true;
	const destinationMatches = filters.destination
		? experience.destination === filters.destination
		: true;

	return searchMatches && categoryMatches && destinationMatches;
}
