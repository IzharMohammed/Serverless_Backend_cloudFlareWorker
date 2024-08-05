/* How to get query params  :- https://community.cloudflare.com/t/parse-url-query-strings-with-cloudflare-workers/90286*/

// Returning json

/* export default {
	async fetch(request : Request, env : Env, ctx : ExecutionContext): Promise<Response> {
	//	return new Response('Learning serverless backends from hkirat');
	return Response.json({
		message : 'Learning serverless backends from hkirat'
	})
	},
} satisfies ExportedHandler<Env>; */


/* How can i do routing in cloudflare workers */
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};

// npx wrangler login
// npm run deploy