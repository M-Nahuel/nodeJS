const myURL = new URL('https://www.mnahuel.com/courses/programming/?order=views&level=1');

console.log(myURL.hostname);

console.log(myURL.pathname);

console.log(myURL.searchParams);
console.log(myURL.searchParams.get('order'));
console.log(myURL.searchParams.get('level'));