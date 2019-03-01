/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    function loopAllFeedsUrlDefined(input) {
        it('has url in every defined feed', function() {
            expect(input).toBeDefined();
        });
    }

    function loopAllFeedsNameDefined(input) {
        it('has name in every defined feed', function() {
            expect(input).toBeDefined();
        });
    }

    function loopAllFeedsIsValid(input, output) {
        if (input && output) {
            it(input.toString() + ' url in feed isValid: ' + output.toString(), function() {
                expect(utils.isUrlValid(input)).toEqual(output);
            });
        }
    }

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        for (let i = 0, len = allFeeds.length; i < len; i++) {
            loopAllFeedsUrlDefined(allFeeds[i].url);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a valid URL.
         */
        for (let i = 0, len = allFeeds.length; i < len; i++) {
            loopAllFeedsIsValid(allFeeds[i].url, true);
        }



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        for (let i = 0, len = allFeeds.length; i < len; i++) {
            loopAllFeedsNameDefined(allFeeds[i].name);
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        afterAll(function() {
            var body = document.body;
            if (body && body.className.indexOf('menu-hidden') < 0) {
                toggleMenu();
            }
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('has hidden menu by default', function() {
            var menuHiddenClass = document.querySelectorAll('.menu-hidden')[0];
            expect(menuHiddenClass).toBeDefined();
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('can toggle class `menu-hidden` on click', function() {
            var menuHiddenClass, spyOnClickEvent;

            menuLink = document.querySelectorAll('.menu-icon-link')[0];
            menuHiddenClass = document.querySelectorAll('.menu-hidden')[0];

            spyOnClickEvent = spyOn(menuLink, 'onclick');

            $('.menu-icon-link').click();

            expect(spyOnClickEvent).toHaveBeenCalled();
            expect(menuHiddenClass.className).toEqual('');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
