"use client";

import { useCallback, useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { experiences } from "@/lib/data/experiences";
import { matchesExperienceFilters } from "@/lib/utils/match-filters";
import type { ExperienceFilters } from "@/types/filters";

type QueryParamsLike = {
	get: (key: string) => string | null;
	toString: () => string;
};

function getFiltersFromParams(searchParams: QueryParamsLike): ExperienceFilters {
	return {
		search: searchParams.get("search") ?? "",
		category: searchParams.get("category") ?? "",
		destination: searchParams.get("destination") ?? "",
	};
}

function buildFiltersQuery(
	currentParams: QueryParamsLike,
	filters: ExperienceFilters
) {
	const nextParams = new URLSearchParams(currentParams.toString());

	if (filters.search.trim()) {
		nextParams.set("search", filters.search);
	} else {
		nextParams.delete("search");
	}

	if (filters.category.trim()) {
		nextParams.set("category", filters.category);
	} else {
		nextParams.delete("category");
	}

	if (filters.destination.trim()) {
		nextParams.set("destination", filters.destination);
	} else {
		nextParams.delete("destination");
	}

	return nextParams.toString();
}

export function useExperienceFilters() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const filters = useMemo(
		() => getFiltersFromParams(searchParams),
		[searchParams]
	);

	useEffect(() => {
		const nextQuery = buildFiltersQuery(searchParams, filters);
		const currentQuery = searchParams.toString();

		if (nextQuery === currentQuery) {
			return;
		}

		const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
		router.replace(nextUrl);
	}, [filters, pathname, router, searchParams]);

	const filteredExperiences = useMemo(
		() =>
			experiences.filter((experience) =>
				matchesExperienceFilters(experience, filters)
			),
		[filters]
	);

	const updateFilter = useCallback(
		(key: keyof ExperienceFilters, value: string) => {
			const nextFilters = {
				...filters,
				[key]: value,
			};

			const nextQuery = buildFiltersQuery(searchParams, nextFilters);
			const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;

			router.replace(nextUrl);
		},
		[filters, pathname, router, searchParams]
	);

	return {
		filters,
		filteredExperiences,
		updateFilter,
	};
}
