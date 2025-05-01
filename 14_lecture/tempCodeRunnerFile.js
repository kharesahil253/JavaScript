const fetchUser = () => Promise.resolve("User data");
const fetchPosts = () => Promise.resolve("Post data");
const fetchComments = () => Promise.resolve("Comment data"); 

(async () => {
    try {
      const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments(),
      ]);
  
      console.log(user, posts, comments);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();