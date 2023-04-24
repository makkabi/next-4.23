export type BlogPostRest = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
};

export type BlogImageRest = {
  id: number;
  guid: {
    rendered: string;
  };
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
};
