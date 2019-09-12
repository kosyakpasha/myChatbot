import {getAllListingItems} from './controller/getAllListingItems';

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/listing-items",
    method: "get",
    action: getAllListingItems
  },
];
