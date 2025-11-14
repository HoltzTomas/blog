import { basehub } from "basehub";
import { RichText } from "basehub/react-rich-text";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeueMachinaRegular, NeueMachinaUltraBold } from "../../components/Fonts";
import { AvatarLogo } from "../../components/AvatarLogo";
import { RichTextComponents } from "../../components/RichTextComponents";

export const revalidate = 60;

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const data = await basehub({ 
    draft: false,
    cache: 'no-store' // Force fresh data for production builds
  }).query({
    posts: {
      __args: {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
      items: {
        _id: true,
        _title: true,
        slug: true,
        content: {
          json: {
            content: true,
          },
        },
        excerpt: true,
        publishedAt: true,
        author: true,
        series: true,
        metaDescription: true,
        coverImage: {
          url: true,
          alt: true,
        },
      },
    },
  });

  return data.posts.items[0] || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post._title,
    description: post.metaDescription || post.excerpt || "",
    openGraph: {
      title: post._title,
      description: post.metaDescription || post.excerpt || "",
      url: `https://tomasholtz.com/blog/${post.slug}`,
      siteName: "Tomas Holtz's blog",
      images: post.coverImage?.url ? [{
        url: post.coverImage.url,
        alt: post.coverImage.alt || post._title,
      }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: "https://tomasholtz.com/blog/" + post.slug,
      creator: "@tomasholtz_",
      images: post.coverImage?.url ? [post.coverImage.url] : undefined,
    },
    metadataBase: new URL(`https://tomasholtz.com/blog/${post.slug}`),
  };
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Logo Section */}
        <div className="flex justify-center">
          <AvatarLogo />
        </div>

        {/* Title Section */}
        <h1 className={`text-center text-blue ${NeueMachinaUltraBold.className}`} 
            style={{ fontSize: '35px', lineHeight: '1.4' }}>
          {post._title}
        </h1>

        {/* Content Section */}
        <div className={`${NeueMachinaRegular.className} blog-page`}>
          <RichText components={RichTextComponents}>
            {post.content.json.content}
          </RichText>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const data = await basehub({ 
    draft: false,
    cache: 'no-store'
  }).query({
    posts: {
      items: {
        slug: true,
      },
    },
  });

  return data.posts.items.map((post) => ({
    slug: post.slug,
  }));
}