// this page is not for rendering
// for managing data

export function GET(request) {
  console.log("I am GET api!");
  // access to http://localhost:3000/api, you'll see
  return new Response("Hello!");
}
