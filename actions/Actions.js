// Actions.js
const Actions = {
  setChangelogData: (data) => (state) => {
    console.debug("Setting changelog data:", data);
    return {
      ...state,
      common: {
        ...state.common,
        changelogData: data,
      },
    };
  },
  setSearchQuery: (query) => (state) => {
    console.log("setSearchQuery", query, state);
    return { ...state, common: { ...state.common, searchQuery: query } };
  },
  speciesView: {
    setLocalPage: (page) => ({ speciesView: { currentPage: page } }),
    getLocalPage: (state) => state.speciesView.currentPage || 1,
  },
  setCurrentPage: (page) => (state) => {
    return {
      ...state,
      common: {
        ...state.common,
        currentPage: page,
      },
    };
  },
  updateData: (dataKey) => (state) => {
    return { ...state }; // Update this action as needed
  },
  setBlogData: (data) => (state) => {
    console.debug("Setting blog data:", data);
    return {
      ...state,
      common: {
        ...state.common,
        blogData: data,
      },
    };
  },
  setSpeciesData: (data) => (state) => {
    console.log("Updating species data in state", data);
    return {
      ...state,
      common: {
        ...state.common,
        speciesData: data,
      },
    };
  },

  setSpeciesCurrentPage: (newPage) => (state) => {
    console.log("Setting species current page to:", newPage);
    return {
      common: {
        ...state.common,
        speciesCurrentPage: newPage,
      },
    };
  },

  // ... other non-auth actions ...
};

export default Actions;
