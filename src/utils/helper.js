export function filterData(restaurantList, searchText) {
  return restaurantList?.filter((res) =>
    res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
