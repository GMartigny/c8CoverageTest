import test from "ava";
import M from ".";

test("dummy", (t) => {
    t.is(M.pow(5, 5), 5 ** 5);
    t.is(M.floor(1.99), 1);
    t.is(M.floor(22), 22);

    // Test don't call M.fibo on purpose
});
