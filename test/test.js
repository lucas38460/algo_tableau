// import assert from "assert";
import { uMin } from "../js/app.js";
import { moyenne } from "../js/app.js";
import { sansstr } from "../js/app.js";


describe('array', function () {
  describe('min()', function () {
    it('should return 1', function () {
      assert.equal(uMin([1,2,3]), 1);
    });
    it('should return ', function () {
      assert.equal(uMin([4,5,6]), 5);
    });
  });

  describe('moyenne()', function () {
    it('should return 2', function () {
      assert.equal(moyenne([1,2,3]), 2);
    });
  });

  describe('sansstr()', function () {
    it('should return [11, 27, 42, 1]', function () {
      assert.equal(sansstr(["11","27","42", "1"]), [11, 27, 42, 1]);
    });
  });
});