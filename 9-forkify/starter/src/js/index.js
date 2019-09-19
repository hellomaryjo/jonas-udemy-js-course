import Search from './models/Search';
import recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 * SEARCH CONTROLLER
*/
const controlSearch = async () => {
    // 1) get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) new search obj and add to state
        state.search = new Search(query);

        // 3) prep UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);

        // 4) search for recipes
        await state.search.getResults();

        // 5) render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResultsPages.addEventListener('click', e => {
    const button = e.target.closest('.btn-inline');

    if (button) {
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
    
});


/**
 * RECIPE CONTROLLER
*/
const controlRecipe = () => {
    const id = window.location.hash;
    console.log(id);
};

window.addEventListener('hashchange', controlRecipe);