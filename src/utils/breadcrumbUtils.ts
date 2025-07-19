// Utility function to get the page title from the pathname
export const getPageTitle = (pathname: string): string => {
  const path = pathname.replace(/^\//, ''); // Remove leading slash
  
  // Special cases for custom titles
  const titleMap: Record<string, string> = {
    '': 'Home',
    'about-the-organisation': 'About the Organisation',
    'vision-mission': 'Vision and Mission',
    'executive-body-members': 'Executive Body Members',
    'president-message': 'Message from President',
    'our-policies': 'Our Policies',
    'annual-reports': 'Annual Reports',
    'audit-reports': 'Audit Reports',
    'our-services': 'Our Services',
    'current-projects': 'Current Projects',
    'upcoming-projects': 'Upcoming Projects',
    'completed-projects': 'Completed Projects',
    'gallery': 'Gallery',
    'contact': 'Contact',
    'donate-now': 'Donate Now',
  };

  // Return the mapped title or generate one from the path
  return titleMap[path] || path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Generate breadcrumb items for a given pathname
export const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = paths.map((path, index) => {
    const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
    return {
      name: getPageTitle(path),
      path: routeTo,
    };
  });
  
  // Always include Home as the first breadcrumb
  return [{ name: 'Home', path: '/' }, ...breadcrumbs];
};
