const curry = (func) => (a) => (b) => (c) => func(a, b, c);
