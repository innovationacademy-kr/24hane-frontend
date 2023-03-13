// Sets an item with a Key to local storage
export const saveStorage = function (key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
};

// Looks for a local storage item and returns if present
export const getStorage = function (key: string, item?: string) {
  if (localStorage.getItem(key) && item) {
    const data = JSON.parse(localStorage.getItem(key) as string);
    return data[item];
  } else if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
};

// Clear a single item or the whole local storage
export const clearStorage = function (key = "false") {
  if (key !== "false") {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};
