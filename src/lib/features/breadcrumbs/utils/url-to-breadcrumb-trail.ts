import type { Page } from '@sveltejs/kit';

type URL = Page['url'];

interface BreadcrumbItem {
	label: string;
	href: string;
}

export const urlToBreadcrumbTrail = (url: URL): BreadcrumbItem[] => {
	const rootCrumb: BreadcrumbItem = {
		href: '/',
		label: 'Home'
	};
	const segments = url.pathname.split('/').filter(Boolean);

	const to = (pathname: string) => {
		return {
			href: pathname,
			label: pathname
				.split('/')
				.filter(Boolean)
				.map((segment) => segment[0].toUpperCase() + segment.slice(1))
				.join(' ')
		};
	};

	const breadcrumbTrail = segments.map((_, index) => {
		const pathname = `/${segments.slice(0, index + 1).join('/')}`;
		return to(pathname);
	});

	return [rootCrumb, ...breadcrumbTrail];
};
