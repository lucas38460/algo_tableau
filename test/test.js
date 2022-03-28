import assert from "assert";
import { algo_tableau } from "..js/app.js"


describe('str', function () {
  describe('algo_tableau()', function () {
    it('should return ', function () {
      assert.equal(algo_tableau(""));
    });
    it('should return movie_and_book', function () {
      assert.equal(algo_tableau("MovieAndBook"), "movie_and_book");
    });
    it('should return app7_test', function () {
      assert.equal(algo_tableau("App7Test"), "app7_test");
    });
    it('should return home', function () {
      assert.equal(algo_tableau("Home"), "home");
    });
    it('should return play-movie', function () {
      assert.equal(algo_tableau("play-movie"), "play-movie");
    });
    it('should return "1"', function () {
      assert.equal(algo_tableau(1), "1");
    });
  });
});