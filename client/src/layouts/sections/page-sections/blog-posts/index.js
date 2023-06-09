
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// BlogPosts page components
import BlogPostFour from "layouts/sections/page-sections/blog-posts/components/BlogPostFour";
import BlogPostOne from "layouts/sections/page-sections/blog-posts/components/BlogPostOne";
import BlogPostThree from "layouts/sections/page-sections/blog-posts/components/BlogPostThree";
import BlogPostTwo from "layouts/sections/page-sections/blog-posts/components/BlogPostTwo";

// BlogPosts page components code
import blogPostFourCode from "layouts/sections/page-sections/blog-posts/components/BlogPostFour/code";
import blogPostOneCode from "layouts/sections/page-sections/blog-posts/components/BlogPostOne/code";
import blogPostThreeCode from "layouts/sections/page-sections/blog-posts/components/BlogPostThree/code";
import blogPostTwoCode from "layouts/sections/page-sections/blog-posts/components/BlogPostTwo/code";

function BlogPosts() {
  return (
    <BaseLayout
      title="Blog Posts"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/blog-posts" },
        { label: "Blog Posts" },
      ]}
    >
      <View title="Blog 1" code={blogPostOneCode}>
        <BlogPostOne />
      </View>
      <View title="Blog 2" code={blogPostTwoCode}>
        <BlogPostTwo />
      </View>
      <View title="Blog 3" code={blogPostThreeCode}>
        <BlogPostThree />
      </View>
      <View title="Blog 4" code={blogPostFourCode}>
        <BlogPostFour />
      </View>
    </BaseLayout>
  );
}

export default BlogPosts;
